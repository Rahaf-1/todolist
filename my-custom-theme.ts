import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": 'system - ui',
        "--theme-font-family-heading": 'system - ui',
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "8px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "0 0 0",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "0 0 0",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #74a7ff 
        "--color-primary-50": "234 242 255", // #eaf2ff
        "--color-primary-100": "227 237 255", // #e3edff
        "--color-primary-200": "220 233 255", // #dce9ff
        "--color-primary-300": "199 220 255", // #c7dcff
        "--color-primary-400": "158 193 255", // #9ec1ff
        "--color-primary-500": "116 167 255", // #74a7ff
        "--color-primary-600": "104 150 230", // #6896e6
        "--color-primary-700": "87 125 191", // #577dbf
        "--color-primary-800": "70 100 153", // #466499
        "--color-primary-900": "57 82 125", // #39527d
        // secondary | #ffffff 
        "--color-secondary-50": "255 255 255", // #ffffff
        "--color-secondary-100": "255 255 255", // #ffffff
        "--color-secondary-200": "255 255 255", // #ffffff
        "--color-secondary-300": "255 255 255", // #ffffff
        "--color-secondary-400": "255 255 255", // #ffffff
        "--color-secondary-500": "255 255 255", // #ffffff
        "--color-secondary-600": "230 230 230", // #e6e6e6
        "--color-secondary-700": "191 191 191", // #bfbfbf
        "--color-secondary-800": "153 153 153", // #999999
        "--color-secondary-900": "125 125 125", // #7d7d7d
        // tertiary | #bbb0db 
        "--color-tertiary-50": "245 243 250", // #f5f3fa
        "--color-tertiary-100": "241 239 248", // #f1eff8
        "--color-tertiary-200": "238 235 246", // #eeebf6
        "--color-tertiary-300": "228 223 241", // #e4dff1
        "--color-tertiary-400": "207 200 230", // #cfc8e6
        "--color-tertiary-500": "187 176 219", // #bbb0db
        "--color-tertiary-600": "168 158 197", // #a89ec5
        "--color-tertiary-700": "140 132 164", // #8c84a4
        "--color-tertiary-800": "112 106 131", // #706a83
        "--color-tertiary-900": "92 86 107", // #5c566b
        // success | #64c466 
        "--color-success-50": "232 246 232", // #e8f6e8
        "--color-success-100": "224 243 224", // #e0f3e0
        "--color-success-200": "216 240 217", // #d8f0d9
        "--color-success-300": "193 231 194", // #c1e7c2
        "--color-success-400": "147 214 148", // #93d694
        "--color-success-500": "100 196 102", // #64c466
        "--color-success-600": "90 176 92", // #5ab05c
        "--color-success-700": "75 147 77", // #4b934d
        "--color-success-800": "60 118 61", // #3c763d
        "--color-success-900": "49 96 50", // #316032
        // warning | #ff6a00 
        "--color-warning-50": "255 233 217", // #ffe9d9
        "--color-warning-100": "255 225 204", // #ffe1cc
        "--color-warning-200": "255 218 191", // #ffdabf
        "--color-warning-300": "255 195 153", // #ffc399
        "--color-warning-400": "255 151 77", // #ff974d
        "--color-warning-500": "255 106 0", // #ff6a00
        "--color-warning-600": "230 95 0", // #e65f00
        "--color-warning-700": "191 80 0", // #bf5000
        "--color-warning-800": "153 64 0", // #994000
        "--color-warning-900": "125 52 0", // #7d3400
        // error | #ff4015 
        "--color-error-50": "255 226 220", // #ffe2dc
        "--color-error-100": "255 217 208", // #ffd9d0
        "--color-error-200": "255 207 197", // #ffcfc5
        "--color-error-300": "255 179 161", // #ffb3a1
        "--color-error-400": "255 121 91", // #ff795b
        "--color-error-500": "255 64 21", // #ff4015
        "--color-error-600": "230 58 19", // #e63a13
        "--color-error-700": "191 48 16", // #bf3010
        "--color-error-800": "153 38 13", // #99260d
        "--color-error-900": "125 31 10", // #7d1f0a
        // surface | #c2c2c2 
        "--color-surface-50": "246 246 246", // #f6f6f6
        "--color-surface-100": "243 243 243", // #f3f3f3
        "--color-surface-200": "240 240 240", // #f0f0f0
        "--color-surface-300": "231 231 231", // #e7e7e7
        "--color-surface-400": "212 212 212", // #d4d4d4
        "--color-surface-500": "194 194 194", // #c2c2c2
        "--color-surface-600": "175 175 175", // #afafaf
        "--color-surface-700": "146 146 146", // #929292
        "--color-surface-800": "116 116 116", // #747474
        "--color-surface-900": "95 95 95", // #5f5f5f

    }
}