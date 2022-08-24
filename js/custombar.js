$(function () {
    var click_flg = true;                   // クリックを許可する変数を設定
    $('.check').show();                     // ページ読み込み時、任意のselect1つだけ表示
    $('.no1').show();                       // ページ読み込み時、任意のテキスト1つだけ表示
    $('ul li').on('click', function(){      // セレクトボックスのどれかがクリックされた時
        if(click_flg){                        // クリックが許可されているかどうか
            click_flg = false;                  // ボタンを一時的に無効
            $('ul li').removeClass('check');    // 全てのliからcheckを削除してから、
            $(this).addClass('check');          // 選択されたものにcheckのクラスを付ける
            $('ul li').not('.check').fadeToggle(400, function() { // check以外の表示と非表示を切り替える
                click_flg = true;                   // コールバック関数を使い、アニメーションが終わってからtrueにするように指定
            });
            $('p').hide();                        // pを全て非表示
            $('.' + $(this).attr('link')).show(); // selectされているlinkと同じクラスをもつpだけ表示
        }
    });
});
