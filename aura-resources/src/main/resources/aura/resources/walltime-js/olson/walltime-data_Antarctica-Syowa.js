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
(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {},
        zones: {"Antarctica/Syowa":[{"name":"Antarctica/Syowa","_offset":"0","_rule":"-","format":"zzz","_until":"1957 Jan 29"},{"name":"Antarctica/Syowa","_offset":"3:00","_rule":"-","format":"SYOT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);