// module.exports = {
//   css: {
//     loaderOptions: {
//       less: {
//         modifyVars: {
//           red: '#03a9f4',
//           blue: '#3eaf7c',
//           orange: '#f08d49',
//           'text-color': '#111',
//           'border-color': '#000'
//         }
//       }
//     }
//   }
// };


module.exports = {
  configureWebpack:{
    modules:{
      rules: [
        {
          test: /\.less$/,
          use: [
            // ...其他 loader 配置
            {
              loader: 'less-loader',
              options: {
                modifyVars: {
                  // 直接覆盖变量
                  red: '#03a9f4',
                  blue: '#3eaf7c',
                  orange: '#f08d49',
                  'text-color': '#111',
                  'border-color': '#eee'
                  // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                }
              }
            }
          ]
        }
      ]
    }
  },
  //两种写法都可以 
  // css: {
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         red: '#03a9f4',
  //         blue: '#3eaf7c',
  //         orange: '#f08d49',
  //         'text-color': '#111',
  //         'border-color': '#000'
  //       }
  //     }
  //   }
  // }
}