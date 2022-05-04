package com.fpp.code.core.cache;

import com.fpp.code.core.cache.impl.SimpleCacheImpl;

import java.util.Set;

/**
 * 缓存接口
 * @see SimpleCacheImpl 默认实现
 * @see CacheKey 缓存key
 * @author fpp
 * @version 1.0
 * @date 2020/10/20 14:35
 */
public interface Cache<K,C>{
    void put(K key, C object);
    C get(K key);
    void remove(K key);
    void clear();
    Set<K> getKeys();
}
