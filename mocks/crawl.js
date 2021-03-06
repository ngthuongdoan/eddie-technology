const generateData = () => {
  const result = [];
  const products = document.querySelectorAll('#categoryPage > div.container-productbox > ul > li');
  for (let i = 0; i < products.length; i++) {
    const obj = {
      brand: 'Xiaomi',
      category: 'X3txeJDTkFeEcAySqVsQ',
      name: '',
      listedPrice: '',
      promotionPrice: '',
      promotionPercent: '',
      colors: ['Xám', 'Trắng', 'Xanh Dương'],
      description:
        '<h3>\r\n      Trong những tháng cuối năm 2020 Apple đã chính thức giới thiệu đến người dùng cũng như iFan\r\n      thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn,\r\n      hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.\r\n    </h3>\r\n    <h3>Hiệu năng vượt xa mọi giới hạn</h3>\r\n    <p>\r\n      Apple đã trang bị con chip mới nhất của hãng (tính đến 11/2020) cho iPhone 12 đó là A14\r\n      Bionic, được sản xuất trên tiến trình 5 nm với hiệu suất ổn định hơn so với chip A13 được\r\n      trang bị trên phiên bản tiền nhiệm iPhone 11.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Chip A14 Bionic mạnh mẽ | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-144220-044259.jpg"\r\n        class="ls-is-cached lazyloaded"\r\n        title="Chip A14 Bionic mạnh mẽ | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-144220-044259.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Với CPU Apple A14 Bionic, bạn có thể dễ dàng trải nghiệm mọi tựa game với những pha chuyển\r\n      cảnh mượt mà hay hàng loạt hiệu ứng đồ họa tuyệt đẹp ở mức đồ họa cao mà không lo tình trạng\r\n      giật lag.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Chiến game siêu mượt, đồ họa tuyệt đẹp | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-18.jpg"\r\n        class="ls-is-cached lazyloaded"\r\n        title="Chiến game siêu mượt, đồ họa tuyệt đẹp | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-18.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Chưa hết, Apple còn gây bất ngờ đến người dùng với hệ thống 5G lần đầu tiên được trang bị trên\r\n      những chiếc iPhone, cho tốc độ truyền tải dữ liệu nhanh hơn, ổn định hơn.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Kết nối 5G truyền tải dữ liệu nhanh chóng | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-20.jpg"\r\n        class="ls-is-cached lazyloaded"\r\n        title="Kết nối 5G truyền tải dữ liệu nhanh chóng | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-20.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      iPhone 12 sẽ chạy trên hệ điều hành iOS 14 với nhiều tính năng hấp dẫn như hỗ trợ Widget cũng\r\n      như những nâng cấp tối ưu phần mềm đáng kể mang lại những trải nghiệm thú vị mới lạ đến người\r\n      dùng.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Khám phá những tính năng mới hấp dẫn trên iOS 14 | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-13.jpg"\r\n        class="lazyloaded"\r\n        title="Khám phá những tính năng mới hấp dẫn trên iOS 14 | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-13.jpg"\r\n      />\r\n    </p>\r\n    <h3>Cụm camera không ngừng cải tiến</h3>\r\n    <p>\r\n      iPhone 12 được trang bị hệ thống camera kép bao gồm camera góc rộng và camera siêu rộng có\r\n      cùng độ phân giải là 12 MP, chế độ ban đêm (Night Mode) trên bộ đôi camera này cũng đã được\r\n      nâng cấp về phần cứng lẫn thuật toán xử lý, khi chụp những bức ảnh thiếu sáng bạn sẽ nhận được\r\n      kết quả ấn tượng với màu sắc, độ chi tiết rõ nét đáng kinh ngạc.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Cụm camera sau| iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030344.jpg"\r\n        class="lazyloaded"\r\n        title="Cụm camera sau| iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030344.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Bạn có thể khám phá thêm những tính năng của camera trên iPhone 12 như chế độ smart HDR 3 giúp\r\n      cân bằng yếu tố ánh sáng trong ảnh, làm nổi bật chi tiết đối tượng và cây cối trong khi vẫn\r\n      giữ được màu sắc phong phú của bầu trời ngay cả vào buổi trưa nắng gắt.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Chụp ảnh với tính năng smart HDR 3 sắc nét, chất lượng | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-9.jpg"\r\n        class="lazyloaded"\r\n        title="Chụp ảnh với tính năng smart HDR 3 sắc nét, chất lượng | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-9.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Chế độ chụp chân dung đã tốt nay còn tốt hơn trong việc làm mờ hậu cảnh một cách nghệ thuật để\r\n      dồn hết sự tập trung vào đối tượng mà bạn muốn chụp.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Nổi bật chủ thể với tính năng chụp chân dung độc đáo | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-10.jpg"\r\n        class="lazyloaded"\r\n        title="Nổi bật chủ thể với tính năng chụp chân dung độc đáo | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-10.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Bạn sẽ dễ dàng quay video 4K HDR với chuẩn điện ảnh Dolby Vision và chỉnh sửa ngay trên chiếc\r\n      điện thoại của mình, bạn có thể đưa video lên TV của bạn để thưởng thức thước phim sắc nét\r\n      chất lượng cao.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Quay video chất lượng ngay cả trong điều kiện ánh sáng yếu | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-11.jpg"\r\n        class="lazyloaded"\r\n        title="Quay video chất lượng ngay cả trong điều kiện ánh sáng yếu | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-11.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Sự kết hợp của 2 cảm biến chất lượng này đã tạo nên một hệ thống camera chuyên nghiệp không\r\n      khác gì những chiếc máy ảnh thực thụ, dễ dàng đem lại những bức hình sắc nét tuyệt đối, độ chi\r\n      tiết cao và đa dạng chế độ chụp cho người dùng linh hoạt sử dụng.\r\n    </p>\r\n    <h3>Ghi dấu ấn về mặt thiết kế</h3>\r\n    <p>\r\n      Về ngoại hình iPhone 12 có thiết kế hoài niệm với phần cạnh được làm vuông vức tương tự trên\r\n      mẫu iPhone 4 thay vì bo cong như iPhone 11.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt=" iPhone 12 có thiết kế hoài niệm tương tự iPhone 4 series"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030352.jpg"\r\n        class="lazyloaded"\r\n        title=" iPhone 12 có thiết kế hoài niệm tương tự iPhone 4 series"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030352.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Ở mặt trước iPhone 12 phần tai thỏ được làm nhỏ gọn hơn và cũng là nơi chứa cảm biến Face ID\r\n      có thể nhận diện khuôn mặt một cách nhanh chóng và chính xác.\r\n    </p>\r\n    <p>\r\n      Apple còn mang đến cho người một loạt gam màu cá tính, độc đáo trên những chiếc iPhone của\r\n      mình để người dùng có sự lựa chọn phù hợp với những phong cách khác nhau.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Sở hữu loạt gam màu cá tính | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-17.jpg"\r\n        class="lazyloaded"\r\n        title="Sở hữu loạt gam màu cá tính | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-17.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      iPhone 12 được trang bị màn hình Super Retina XDR OLED tràn viền có kích thước 6.1 inch, cho\r\n      bạn không gian trải nghiệm lớn cũng như những giây phút giải trí hấp dẫn trên một màn ảnh vô\r\n      cùng chất lượng.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Màn hình Super Retina XDR OLED 6.1 inch | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040421-030410.jpg"\r\n        class="lazyloaded"\r\n        title="Màn hình Super Retina XDR OLED 6.1 inch | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040421-030410.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Máy được chế tác có độ hoàn thiện cực cao với thiết kế nguyên khối, khung nhôm và mặt sau là\r\n      kính cường lực cao cấp toát lên vẻ ngoài sang chảnh cũng như mang lại độ hiệu quả an toàn cao\r\n      mỗi khi sử dụng.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Độ hoàn thiện cao, chắc chắn cho thiết bị | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-041521-031513.jpg"\r\n        class="lazyloaded"\r\n        title="Độ hoàn thiện cao, chắc chắn cho thiết bị | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-041521-031513.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Mặt trước của iPhone 12 được phủ hoàn toàn bởi lớp kính cường lực Ceramic Shield cứng cáp,\r\n      được đánh giá là có độ bền cao và cứng cáp hơn hầu hết các loại mặt kính có trên điện thoại\r\n      thông minh khác có mặt trên thị trường.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Lớp kính cường lực Ceramic Shield | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030328.jpg"\r\n        class="lazyloaded"\r\n        title="Lớp kính cường lực Ceramic Shield | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030328.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Và để cho thiết bị trở nên hoàn hảo hơn nên không thể thiếu khả năng kháng nước, bụi chuẩn\r\n      IP68 giúp người dùng yên tâm sử dụng với những buổi đi chơi biển mà không hề lo chiếc máy bị\r\n      vô nước.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Kháng nước bụi chuẩn IP68 | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-2.jpg"\r\n        class="lazyloaded"\r\n        title="Kháng nước bụi chuẩn IP68 | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-2.jpg"\r\n      />\r\n    </p>\r\n    <h3>Trải nghiệm xuyên suốt, liền mạch cả ngày dài</h3>\r\n    <p>\r\n      Để bạn có những giây phút trải nghiệm liền mạch, Apple đã trang bị một viên pin có dung lượng\r\n      2815 mAh, tích hợp cho khả năng tiết kiệm pin giúp người dùng có thể giải trí đa phương tiện\r\n      lên đến 17 giờ và nghe nhạc liên tục lên đến 65 giờ.\r\n    </p>\r\n    <p>\r\n      <img\r\n        alt="Dung lượng pin sử dụng đáp ứng đủ một ngày | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030358.jpg"\r\n        class="lazyloaded"\r\n        title="Dung lượng pin sử dụng đáp ứng đủ một ngày | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-040321-030358.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Và không thể thiếu đó chính là tính năng sạc nhanh, iPhone 12 có khả năng sạc pin nhanh qua\r\n      cáp công suất 20 W, chỉ trong vòng 30 phút thì chiếc máy đã có thế sạc được 50% pin. Thêm vào\r\n      đó là khả năng sạc không dây MagSafe vô cùng tiện dụng.\r\n    </p>\r\n    <p>Lưu ý: Củ sạc không kèm theo máy mà phải mua riêng.</p>\r\n    <p>\r\n      <img\r\n        alt="Sạc nhanh và sạc không dây tiện lợi hữu ích | iPhone 12"\r\n        data-src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-16.jpg"\r\n        class="lazyloaded"\r\n        title="Sạc nhanh và sạc không dây tiện lợi hữu ích | iPhone 12"\r\n        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-16.jpg"\r\n      />\r\n    </p>\r\n    <p>\r\n      Sự lột xác đầy mạnh mẽ lần này của Apple không chỉ gây bất ngờ đến người dùng mà còn đánh dấu\r\n      một kỷ nguyên mới trong nền phát triển smartphone Apple. Và đây cũng được xem là một trong\r\n      những bộ series iPhone mà Apple đặt nhiều tâm huyết, mục đích và đầy tính năng mạnh mẽ chưa\r\n      từng thấy.\r\n    </p>',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/xiaomi%2Fredmi-10-blue-gc-org.jpg?alt=media&token=f867a81c-1240-42b3-a8f7-b3b69e9e0e8c',
        'https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/xiaomi%2Fxiaomi-redmi-10-trang-1-org.jpg?alt=media&token=9049b122-5324-411d-a740-2a846b03b92d',
        'https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/xiaomi%2Fxiaomi-redmi-10-xam-1-org.jpg?alt=media&token=ae93691e-d4fe-4d31-85ec-15d97744e24a',
      ],
      specifications: [
        {
          title: 'Màn hình',
          value: [
            {
              title: 'Công nghệ màn hình',
              value: ['OLED'],
            },
            {
              title: 'Độ phân giải',
              value: ['1170 x 2532 Pixels'],
            },
            {
              title: 'Màn hình rộng',
              value: ['6.1" - Tần số quét 60 Hz'],
            },
            {
              title: 'Độ sáng tối đa',
              value: ['1200 nits'],
            },
            {
              title: 'Mặt kính cảm ứng',
              value: ['Kính cường lực Ceramic Shield'],
            },
          ],
        },
        {
          title: 'Camera sau',
          value: [
            {
              title: 'Độ phân giải',
              value: ['2 camera 12 MP'],
            },
            {
              title: 'Quay phim',
              value: [
                '4K 2160p@30fps',
                '4K 2160p@60fps',
                'FullHD 1080p@120fps',
                'HD 720p@30fps',
                'FullHD 1080p@240fps',
                'FullHD 1080p@60fps',
                '4K 2160p@24fps',
                'FullHD 1080p@30fps',
              ],
            },
            {
              title: 'Đèn Flash',
              value: ['Đèn LED kép'],
            },
            {
              title: 'Tính năng',
              value: [
                'Ban đêm (Night Mode)',
                'Trôi nhanh thời gian (Time Lapse)',
                'Quay chậm (Slow Motion)',
                'Xóa phông',
                'Toàn cảnh (Panorama)',
                'Tự động lấy nét (AF)',
                'Nhận diện khuôn mặt',
                'HDR',
                'Zoom kỹ thuật số',
                'Góc rộng (Wide)',
                'Góc siêu rộng (Ultrawide)',
              ],
            },
          ],
        },
        {
          title: 'Camera trước',
          value: [
            {
              title: 'Độ phân giải',
              value: ['12 MP'],
            },
            {
              title: 'Tính năng',
              value: [
                'Ban đêm (Night Mode)',
                'Trôi nhanh thời gian (Time Lapse)',
                'Quay chậm (Slow Motion)',
                'Xóa phông',
                'Toàn cảnh (Panorama)',
                'Tự động lấy nét (AF)',
                'Nhận diện khuôn mặt',
                'HDR',
                'Zoom kỹ thuật số',
                'Góc rộng (Wide)',
                'Góc siêu rộng (Ultrawide)',
              ],
            },
          ],
        },
        {
          title: 'Hệ điều hành & CPU',
          value: [
            {
              title: 'Hệ điều hành',
              value: ['iOS 14'],
            },
            {
              title: 'Chip xử lý (CPU)',
              value: ['Apple A14 Bionic 6 nhân'],
            },
            {
              title: 'Tốc độ CPU',
              value: ['2 nhân 3.1 GHz & 4 nhân 1.8 GHz'],
            },
            {
              title: 'Chip đồ họa (GPU)',
              value: ['Apple GPU 4 nhân'],
            },
          ],
        },
        {
          title: 'Bộ nhớ & Lưu trữ',
          value: [
            {
              title: 'RAM',
              value: ['4 GB'],
            },
            {
              title: 'Danh bạ',
              value: ['Không giới hạn'],
            },
          ],
        },
        {
          title: 'Kết nối',
          value: [
            {
              title: 'Mạng di động',
              value: ['Hỗ trợ 5G'],
            },
            {
              title: 'SIM',
              value: ['1 Nano SIM & 1 eSIM'],
            },
            {
              title: 'Wifi',
              value: ['Wi-Fi 802.11 a/b/g/n/ac/ax', 'Wi-Fi MIMO', 'Dual-band (2.4 GHz/5 GHz)', 'Wi-Fi hotspot'],
            },
            {
              title: 'Bluetooth',
              value: ['A2DP, v5.0'],
            },
            {
              title: 'Cổng kết nối/sạc',
              value: ['Lightning'],
            },
            {
              title: 'Jack tai nghe',
              value: ['Lightning'],
            },
          ],
        },
        {
          title: 'Pin & Sạc',
          value: [
            {
              title: 'Loại pin',
              value: ['Li-Ion'],
            },
            {
              title: 'Dung lượng pin',
              value: ['2815 mAh'],
            },
            {
              title: 'Hỗ trợ sạc tối đa',
              value: ['20 W'],
            },
            {
              title: 'Công nghệ pin',
              value: ['Sạc pin nhanh', 'Tiết kiệm pin', 'Sạc không dây MagSafe', 'Sạc không dây'],
            },
          ],
        },
        {
          title: 'Tiện ích',
          value: [
            {
              title: 'Bảo mật nâng cao',
              value: ['Mở khoá khuôn mặt Face ID'],
            },
            {
              title: 'Kháng nước, bụi',
              value: ['IP68'],
            },
            {
              title: 'Ghi âm',
              value: ['Có (microphone chuyên dụng chống ồn)'],
            },
            {
              title: 'Xem phim',
              value: ['H.264(MPEG4-AVC)'],
            },
            {
              title: 'Nghe nhạc',
              value: ['Lossless', 'FLAC', 'AAC', 'MP3'],
            },
          ],
        },
        {
          title: 'Thông tin chung',
          value: [
            {
              title: 'Thiết kế',
              value: ['Nguyên khối'],
            },
            {
              title: 'Chất liệu',
              value: ['Khung nhôm & Mặt lưng kính cường lực'],
            },
            {
              title: 'Kích thước, khối lượng',
              value: ['Dài 146.7 mm - Ngang 71.5 mm - Dày 7.4 mm - Nặng 164 g'],
            },
            {
              title: 'Thời điểm ra mắt',
              value: ['10/2020'],
            },
          ],
        },
      ],
    };
    obj.name = products[i].getElementsByTagName('h3')[0].innerText;
    const listedPrice = products[i].querySelectorAll('p.price-old.black');
    if (listedPrice.length !== 0) {
      obj.listedPrice = Number.parseInt(listedPrice[0].innerText.replace('.', '').replace('đ', '')) * 1000;
      obj.promotionPrice =
        Number.parseInt(products[i].querySelectorAll('strong.price:not(twoprice)')[0].innerText.replace('.', '').replace('đ', '')) * 1000;
      obj.promotionPercent = Number.parseInt(products[i].querySelectorAll('.percent')[0]?.innerText.replace('-', '').replace('%', ''));
    } else {
      obj.listedPrice =
        Number.parseInt(products[i].querySelectorAll('strong.price:not(twoprice)')[0].innerText.replace('.', '').replace('đ', '')) * 1000;
    }
    result.push(obj);
  }
  return result;
};
generateData();
