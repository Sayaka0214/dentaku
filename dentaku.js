
let result = document.querySelector( 'input' ).value;

function update( _v ) {// 入力_vをinput画面に更新する AC
  document.querySelector( 'input' ).value = _v;
  result = '0'
} 

//表示されている数字が0の時 => クリックされた数字だけが表示される
//表示されている数字が0以外の時 => 表示されている数字にクリックされた数字を連結する
function append( _v ) { //数字を連結追加する
  if( result == '0') {
      document.querySelector( 'input' ).value = _v ;
      result = _v;
  } else if( result == '00' ) {
      document.querySelector( 'input' ).value = _v ;
      result = _v;
  } else {
    document.querySelector( 'input' ).value += '' + _v;
    result = result + _v;
  }
}  

//1回目の記号はそのまま表記する(else if)
//2回目の記号↓
//1回目の記号を取得し2回目と同じ記号ならelse ifへ。違う記号なら↓
//1回目の記号を削除
//2回目の記号を追加
function kigou( _v ) { 
  if( result.slice(-1) == '+' ){
    result = result.slice(0,-1)
    result = result + _v;
  } else if (result.slice(-1) == '-'){
      result = result.slice(0,-1)
      result = result + _v;
  } else if (result.slice(-1) == '*'){
      result = result.slice(0,-1)
      result = result + _v;
  } else if (result.slice(-1) == '/'){
      result = result.slice(0,-1)
      result = result + _v;
  } else { //
    document.querySelector( 'input' ).value = result + _v;
    result = result + _v; 
  }
  document.querySelector( 'input' ).value = result
}   
  

function calc() {// イコールの計算
  let v = document.querySelector( 'input' ).value
  let f = new Function( 'return ' + v );
  update( f().toString() );
}
  

