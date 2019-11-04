module.exports = {
    "root": true,
    "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "amd": true,
      "shared-node-browser": true,
      "es2017": true,
      "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "mammoth": true,
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    //具体规则配置
    //所有规则默认都是禁用的，已使用 standard
    //off或0--关闭规则
    //warn或1--开启规则，警告级别(不会导致程序退出)
    //error或2--开启规则，错误级别(当被触发的时候，程序会退出)
    "rules": {
        // 关闭语句强制分号结尾
        "semi": [0],
        "no-unused-vars": [1, {
          // 允许声明未使用变量
          "vars": "local",
          // 参数不检查
          "args": "none",
          "caughtErrors": "none"
        }],
        //空行最多不能超过100行
        "no-multiple-empty-lines": [2, {"max": 2}],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0],
    }
};
