// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bindAddress:'至江西省南昌市青山湖区广兰大道13号范家新村菜鸟驿站',
    hiddenMyAddress:'none',
    myBlockColor:-1,
    addressInformation: [],
    showCity: "block",
    showBlock: "none",
    mychangeColor: "gray",
    myshowpostage: "none",
    translateX: 0,
    mychangewrapper: true,
    myswiper: [
      'https://yanxuan-item.nosdn.127.net/6ec9798fa205c7259011ccef2d84c24f.png?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan-item.nosdn.127.net/830b50469db99b2f3a192d5280c81e3e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan-item.nosdn.127.net/9a2de6aa89af8576c068caeece5dade3.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan-item.nosdn.127.net/719c71a55273eb34a4af44b41dc7a420.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      'https://yanxuan-item.nosdn.127.net/c8360c0cededd695a953f08ee93b94ca.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    ],
    myswiperad: [
      'https://yanxuan.nosdn.127.net/5a18d49deb3f176e5459f287ff6e3b45.jpg?quality=75&type=webp&imageView&thumbnail=750x0',
      'https://yanxuan.nosdn.127.net/4bf04c281e95cd9f7f90fedace5b6f0c.jpg?quality=75&type=webp&imageView&thumbnail=750x0',
    ],
    comment: [
      'http://thirdqq.qlogo.cn/qqapp/101330628/13930E10FBA457883A09E0B9C3563D01/100',
    ],
    // 最重要的滑块
    goods: {
      page1: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
      page2: [
        { url: 'https://yanxuan-item.nosdn.127.net/4dc617c88e3bc98b63f802d28e1e3388.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "D.Va 发光钥匙链 守望先锋", price: "￥89", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ca2fb544dec8c3d500aeac3849aa653f.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "D.Va CBD手办 守望先锋 ", price: "￥149", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/4e6070b2fe9d72162e9557a07f7b5ad5.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "莱因哈特 CBD手办 守望先锋", price: "￥120", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/4dd0f62bddbabc97cd134202737694d6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "路霸 CBD手办  守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/eaed513375bb1aaeee244a2c4aff31f5.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "MEKA机甲 立体拼图 守望先锋", price: "￥178", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ee81dd9a965f2231f835628716cc656e.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 Funko 迷你手办 猎空", price: "￥109", discount: '每满249减30劵' },
      ],
      page3: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
      page4: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
      page5: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
      page6: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
    },
    goods2: {
      page1: [
        { url: 'https://yanxuan-item.nosdn.127.net/4a8ab350673f69f712399b33cb35b6bd.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "真虾肉鲜虾片 40克", price: "￥6.9", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/705f5963a6ea462e3011e76b99b98fa2.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "和风鱿鱼卷 90克", price: "￥7.9", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/8d0395fa40cf9d34469e86901c35f921.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "弹到嘴里，炭火烤肠 150克", price: "￥22", discount: '新人特价' },
        { url: 'https://yanxuan-item.nosdn.127.net/b54c0fb29d8e9af5ce8b5ddac58c294b.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "来自泰式餐厅的味道，鲜脆泰式蟹片", price: "￥15", discount: '新人特价' },
        { url: 'https://yanxuan-item.nosdn.127.net/28074c36ae92a7390b7ed67d4d3a1c49.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "惊喜藏在蛋黄里，翻砂卤蛋 245克", price: "￥13.9", discount: '新人特价' },
        { url: 'https://yanxuan-item.nosdn.127.net/4ef7a01b6d9174305e56be3d0df84fd5.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "花格云朵酸奶块 96克", price: "￥38", discount: '新人特价' },
      ],
      page2: [
        { url: 'https://yanxuan-item.nosdn.127.net/4dc617c88e3bc98b63f802d28e1e3388.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "D.Va 发光钥匙链 守望先锋", price: "￥89", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ca2fb544dec8c3d500aeac3849aa653f.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "D.Va CBD手办 守望先锋 ", price: "￥149", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/4e6070b2fe9d72162e9557a07f7b5ad5.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "莱因哈特 CBD手办 守望先锋", price: "￥120", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/4dd0f62bddbabc97cd134202737694d6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "路霸 CBD手办  守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/eaed513375bb1aaeee244a2c4aff31f5.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "MEKA机甲 立体拼图 守望先锋", price: "￥178", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ee81dd9a965f2231f835628716cc656e.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 Funko 迷你手办 猎空", price: "￥109", discount: '每满249减30劵' },
      ],
      page3: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
      page4: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
      page5: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
      page6: [
        { url: 'https://yanxuan-item.nosdn.127.net/d2582ca0550bb2985a72bd27e25f7399.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "猎空 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/ce29ee09464da2419a4d0cc8372cc2e8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "末日铁拳 雕像 守望先锋", price: "￥2499", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/115a15819c10cd35a02e5e7944215843.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "死神 雕像 守望先锋", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/1629513e84cfa80fd2f350a0356f1ea8.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "守望先锋 乐高积木", price: "￥899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/58eb9cafc4601d912c39d3b42fbb0b95.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "伊利丹 夜光套头卫衣 魔兽世界", price: "￥1899", discount: '每满249减30劵' },
        { url: 'https://yanxuan-item.nosdn.127.net/93bd9a9414af2b3ed0afdccaf0dffed6.png?type=webp&imageView&quality=65&thumbnail=330x330', title: "魔兽争霸III：重制版 典藏版 实体礼盒", price: "￥818", discount: '每满249减30劵' },
      ],
    },
    city: [        
        {
          city: '北京市',
          block: ['东城区','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区'],
          isShow: false
        },
        {
          city: '天津市',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '河北省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '山西省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '江西省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '安徽省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '浙江省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '福建省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '河南省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '湖北省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '广东省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '海南省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '云南省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        },
        {
          city: '陕西省',
          isShow: false,
          block: ['111','西城区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','西城区','西城区','西城区']
        }
    ],
    blockList: []
  },
  previewImg: function (e) {
    // console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var myswiper = this.data.myswiper;
    wx.previewImage({
      current: myswiper[index],     //当前图片地址
      urls: myswiper,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  changeWrapperLike: function () {
    this.setData({
      mychangewrapper: true,
      translateX: 0
    })
  },
  changeWrapperHot: function () {
    this.setData({
      mychangewrapper: false,
      translateX: '380rpx'
    })
  },
  // 控制3/4屏邮费的显示
  showPostage() {
    if (this.data.myshowpostage == "none") {
      this.setData({
        myshowpostage: "block"
      })
    } else {
      this.setData({
        myshowpostage: "none"
      })
    }
  },
  // 控制3/4屏地址的显示
  hiddenAddress(){
    if (this.data.hiddenMyAddress == "none") {
      this.setData({
        hiddenMyAddress: "block"
      })
    } else {
      this.setData({
        hiddenMyAddress: "none"
      })
    }

  },
  // 保存city信息
  choseCity(e) {
    let addressInformation = this.data.addressInformation
    let city = this.data.city
    let index = e.currentTarget.dataset.index
    addressInformation.push(city[index].city)
    let temp = this.data.addressInformation
    this.setData({
      showCity: 'none',
      addressInformation: temp,
      showBlock: 'block',
      blockList: city[index].block
    })
  },
  //保存区信息
  choseBlock(e) {
    let addressInformation = this.data.addressInformation
    let blockList = this.data.blockList
    let index = e.currentTarget.dataset.index
    let myBlockColor = index
    if(addressInformation.length === 2){
      addressInformation.pop()
    }
    if(addressInformation.indexOf(blockList[index])=== -1){
      addressInformation.push(blockList[index])
    }

    let temp = this.data.addressInformation
    this.setData({
      addressInformation: temp,
      myBlockColor:myBlockColor,
      mychangeColor:'black',
      bindAddress:temp,
    })
  },
  saveAddress(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})