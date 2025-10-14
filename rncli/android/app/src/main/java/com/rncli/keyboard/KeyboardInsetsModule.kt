package com.rncli.keyboard

import android.view.View
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule

class KeyboardInsetsModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private var rootView: View? = null

    override fun getName(): String = "KeyboardInsetsModule"

    @ReactMethod
    fun startListening() {
        val activity = reactContext.currentActivity ?: return   // ✅ fix here
        activity.runOnUiThread {
            rootView = activity.window.decorView.findViewById(android.R.id.content)
            rootView?.let { rv ->
                ViewCompat.setOnApplyWindowInsetsListener(rv) { _, insets ->
                    val imeInsets = insets.getInsets(WindowInsetsCompat.Type.ime())
                    val imeHeight = imeInsets.bottom
                    val map = Arguments.createMap()
                    map.putInt("height", imeHeight)

                    reactContext
                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                        .emit("keyboardHeightChanged", map)

                    insets
                }
            }
        }
    }

    @ReactMethod
    fun stopListening() {
        val activity = reactContext.currentActivity ?: return   // ✅ fix here
        activity.runOnUiThread {
            rootView?.let { rv ->
                ViewCompat.setOnApplyWindowInsetsListener(rv, null)
            }
            rootView = null
        }
    }
}
