$(function () {
  // アンカースクロールアニメーション
  // スクロールにかかる時間
  var time = 500;
  var offsetPcY = 0;
  var offsetSpY = -80;

  // ページ内リンクのみを取得
  $('a[href^="#"]').on('click', function() {
    // スクロールのオフセット値
    if ($(window).width() <= 640) {
    //spの場合
      var offsetY = offsetSpY;

    } else {
    //sp
      var offsetY = offsetPcY;
    }
    // 移動先となる要素を取得
    var target = $(this.hash);
    // if (!target.length) return;
    if (!target.length) {
      var targetY = 0;
    } else {
      var targetY = target.offset().top + offsetY;
    }
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });

  // アンカーページ読み込み時
  // 移動先となる要素を取得
  var target = $(location.hash);
  if (target.length) {
    // スクロールのオフセット値
    if ($(window).width() <= 640) {
      var offsetY = offsetSpY;
    } else {
      var offsetY = offsetPcY;
    }
    var targetY = target.offset().top + offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
  }
	
	$('#navSP .btn_hamburger').click(function () {
		$(this).toggleClass('active');
		$('#menu_inner').toggleClass('active');
		return false;
	});
	
	$('#menu_inner a').click(function () {
		$('#navSP .btn_hamburger').removeClass('active');
		$('#menu_inner').removeClass('active');
	});
	
	$('.accordion').click(function(){
		$(this).toggleClass('open').next().slideToggle();
	});
	
});

