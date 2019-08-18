'use strict';

$(function(){
  $('#m-send').click(function(e) {
    e.preventDefault();
    $('#modal1').modal('hide');
    // $('#form1').submit();
    $('#progress').css('display', 'block');
    // $('#progress-b').css('width', '100%');
    // $('#form1').submit();
  });

  $('#submit').click(function(e) {
    e.preventDefault();
    if ($('#check1a').prop('checked')) {
      let mess =
        "お名前" +
        $('<span/>').text($('#text1').val()).html() + "<br>" +
        "メールアドレス" +
        $('<span/>').text($('#text2').val()).html() + "<br>" +
        "お問い合わせ内容<br>" +
        $('<span/>').text($('#textarea1').val()).html().replace(/\r?\n/g, '<br>') + "<br>" +
        "お問い合わせ種別" +
        $('<span/>').text($('#custom-select-1b').val()).html() + "<br>" +
        "以上でよろしければ送信してください";
      $('#m-body').html(mess);
      $('#m-send').prop("disabled", false);
      $('#m-send').show();
    } else {
      $('#m-body').html("送信できません。プライバシーポリシーに同意してください");
      $('#m-send').prop("disabled", true);
      $('#m-send').hide();
    }
    
    
    $('#modal1').modal('show');
  });
});