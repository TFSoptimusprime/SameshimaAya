$(function () {
  // �A���J�[�X�N���[���A�j���[�V����
  // �X�N���[���ɂ����鎞��
  var time = 500;
  var offsetPcY = 0;
  var offsetSpY = -80;

  // �y�[�W�������N�݂̂��擾
  $('a[href^="#"]').on('click', function() {
    // �X�N���[���̃I�t�Z�b�g�l
    if ($(window).width() <= 640) {
    //sp�̏ꍇ
      var offsetY = offsetSpY;

    } else {
    //sp
      var offsetY = offsetPcY;
    }
    // �ړ���ƂȂ�v�f���擾
    var target = $(this.hash);
    // if (!target.length) return;
    if (!target.length) {
      var targetY = 0;
    } else {
      var targetY = target.offset().top + offsetY;
    }
    // �X�N���[���A�j���[�V����
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // �n�b�V�����������Ƃ�
    window.history.pushState(null, null, this.hash);
    // �f�t�H���g�̏����̓L�����Z��
    return false;
  });

  // �A���J�[�y�[�W�ǂݍ��ݎ�
  // �ړ���ƂȂ�v�f���擾
  var target = $(location.hash);
  if (target.length) {
    // �X�N���[���̃I�t�Z�b�g�l
    if ($(window).width() <= 640) {
      var offsetY = offsetSpY;
    } else {
      var offsetY = offsetPcY;
    }
    var targetY = target.offset().top + offsetY;
    // �X�N���[���A�j���[�V����
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

