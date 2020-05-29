/*
 * Copyright 2020 Mamoe Technologies and contributors.
 *
 * 此源代码的使用受 GNU AFFERO GENERAL PUBLIC LICENSE version 3 许可证的约束, 可以在以下链接找到该许可证.
 * Use of this source code is governed by the GNU AGPLv3 license that can be found through the following link.
 *
 * https://github.com/mamoe/mirai/blob/master/LICENSE
 */

package net.mamoe.mirai.api.http

import io.ktor.application.Application
import io.ktor.server.cio.CIO
import io.ktor.server.engine.ApplicationEngine
import io.ktor.server.engine.applicationEngineEnvironment
import io.ktor.server.engine.connector
import io.ktor.server.engine.embeddedServer
import io.ktor.util.KtorExperimentalAPI
import kotlinx.coroutines.CoroutineExceptionHandler
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch
import net.mamoe.mirai.api.http.route.mirai
import net.mamoe.mirai.utils.DefaultLogger
import org.slf4j.helpers.NOPLoggerFactory
import java.io.OutputStream
import java.io.PrintStream
import kotlin.coroutines.CoroutineContext

object MiraiHttpAPIServer : CoroutineScope {

    var logger = DefaultLogger("Mirai HTTP API")
    override val coroutineContext: CoroutineContext =
        CoroutineExceptionHandler { _, throwable -> logger.error(throwable) }

    lateinit var server: ApplicationEngine

    init {
        SessionManager.authKey = generateSessionKey()//用于验证的key, 使用和SessionKey相同的方法生成, 但意义不同
    }

    fun setAuthKey(key: String) {
        SessionManager.authKey = key
    }

    @OptIn(KtorExperimentalAPI::class)
    fun start(
        host: String = "0.0.0.0",
        port: Int = 8080,
        authKey: String,
        callback: (() -> Unit)? = null
    ) {
        require(authKey.length in 8..128) { "Expected authKey length is between 8 to 128" }
        SessionManager.authKey = authKey

        // TODO: start是无阻塞的，理应获取启动状态后再执行后续代码
        launch {
            val err = System.err
            System.setErr(PrintStream(object : OutputStream() {
                override fun write(b: Int) {
                    // noop
                }
            })) // ignore slf4j's log
            try {
                server = embeddedServer(CIO, environment = applicationEngineEnvironment {
                    this.parentCoroutineContext = coroutineContext
                    this.log = NOPLoggerFactory().getLogger("NMYSL")
                    this.module(Application::mirai)

                    connector {
                        this.host = host
                        this.port = port
                    }
                })
            } finally {
                System.setErr(err)
            }
            server.start(true)


        }

        logger.info("Http api server is running with authKey: ${SessionManager.authKey}")
        callback?.invoke()
    }

    fun stop() = server.stop(5000, 5000)
}