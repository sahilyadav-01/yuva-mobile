if(NOT TARGET hermes-engine::hermesvm)
add_library(hermes-engine::hermesvm SHARED IMPORTED)
set_target_properties(hermes-engine::hermesvm PROPERTIES
    IMPORTED_LOCATION "C:/Users/sahil yadav/.gradle/caches/9.4.1/transforms/220c3c49c603f679f4cac522879563d4/transformed/hermes-android-250829098.0.17-debug/prefab/modules/hermesvm/libs/android.arm64-v8a/libhermesvm.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/sahil yadav/.gradle/caches/9.4.1/transforms/220c3c49c603f679f4cac522879563d4/transformed/hermes-android-250829098.0.17-debug/prefab/modules/hermesvm/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

