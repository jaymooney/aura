/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.auraframework.system;

/**
 * LoggingContext public interface
 */
public interface LoggingContext {

    void startTimer(String name);

    void stopTimer(String name);

    long getTime(String name);

    void resetTimer(String name);

    long getNum(String key);

    void incrementNum(String key);

    void incrementNumBy(String key, long num);

    void setNum(String key, long num);

    Object getValue(String name);

    void setValue(String name, Object value);

    void log();

}
