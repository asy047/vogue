$(function(){
	$('.btnMenu').on('click', function(){
		$(this).fadeOut();
		$('nav').addClass('on');
		$('section').addClass('on');
	})
	
	//nav 영역 안의 메뉴 선택시 실행될 모션
	$('.gnb li').on('click',function(){
		$('.btnMenu').fadeIn();
		$('nav').removeClass('on');
		$('section').removeClass('on');
	//==== 꼭 외우기 ====//
	var i = $(this).index();
		$('section > div').removeClass('on'); //클래스 초기화
		$('section > div').eq(i).addClass('on');
	//==== 꼭 외우기 ====//
	})
});