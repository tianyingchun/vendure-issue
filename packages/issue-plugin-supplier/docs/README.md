# 插件 semic@plugin-product

<https://github.com/search?p=2&q=vendure+plugin+-user%3Avendure-ecommerce&type=Repositories>

## 试戴资源模型的`tryonFrameModelConfig`

```ts
const glassAssetData = {
  frame: {
    framePd: 50,
    imageRealSize: {
      width: 490,
      height: 202,
    },
    frameJoint: {
      left: { x: 0, y: 15.725806451613 },
      right: { x: 100, y: 14.91935483871 },
    },
  },
  temple: {
    imageRealSize: {
      width: 405,
      height: 200,
    },
    templeJoint: {
      left: { x: 0, y: 51.351351351351 },
      right: { x: 100, y: 56.127450980392 },
    },
  },
};
// {"frame":{"framePd":50,"imageRealSize":{"width":490,"height":202},"frameJoint":{"left":{"x":0,"y":15.725806451613},"right":{"x":100,"y":14.91935483871}}},"temple":{"imageRealSize":{"width":405,"height":200},"templeJoint":{"left":{"x":0,"y":51.351351351351},"right":{"x":100,"y":56.127450980392}}}}
```

## canvas 尺寸画线模型的`dimensionModelConfig`

```ts
export const defaultDimensionModel: DimensionModelConfig = {
  /**
   * 中梁
   */
  bridge: [
    ['0.4357', '0.0850'],
    ['0.5544', '0.0850'],
  ],
  /**
   * 框高
   */
  lensHeight: [
    ['0.0000', '0.1622'],
    ['0.0000', '0.7889'],
  ],
  /**
   * 框宽
   */
  lensWidth: [
    ['0.5656', '0.0850'],
    ['0.9522', '0.0850'],
  ],
  /**
   * 整宽
   */
  totalWidth: [
    ['0.0722', '0.9044'],
    ['0.9122', '0.9044'],
  ],
  /**
   * 镜腿总长度
   */
  templeLength: [
    ['0.2211', '0.1056'],
    ['0.7567', '0.1056'],
    ['0.9689', '0.4111'],
  ],
};
// {"bridge":[["0.4357","0.0850"],["0.5544","0.0850"]],"lensHeight":[["0.0000","0.1622"],["0.0000","0.7889"]],"lensWidth":[["0.5656","0.0850"],["0.9522","0.0850"]],"totalWidth":[["0.0722","0.9044"],["0.9122","0.9044"]],"templeLength":[["0.2211","0.1056"],["0.7567","0.1056"],["0.9689","0.4111"]]}
```
