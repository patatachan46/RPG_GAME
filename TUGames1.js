"use strict";
// リファクタリング

var TUG = TUG || {}
TUG.GR = {};

TUG.mCurrentFrame = 0;        //　経過フレーム数
TUG.mFPS = 60;                // フレームレート
TUG.mHeight = 120;            // 仮装画面・高さ
TUG.mWidth = 128;             // 仮装画面・幅

TUG.onTimer = function() {}

TUG.init = function()
{
  TUG.GR.mCanvas = document.createElement("canvas");  //仮装画面を作成
  TUG.GR.mCanvas.width  = TUG.mWidth;                 //仮装画面の幅を設定
  TUG.GR.mCanvas.height = TUG.mHeight;                //仮装画面の高さを設定
  TUG.GR.mG = TUG.GR.mCanvas.getContext("2d");        // 仮装画面の2D描画コンテキストを取得

  requestAnimationFrame( TUG.wmTimer );
}



// IE対応
TUG.Sign = function( val )
{
	if(val == 0) {
		return(0);
	}
	if(val < 0) {
		return(-1);
	}
	return(1);
}

TUG.wmTimer = function()
{
  if( !TUG.mCurrentStart ) {　　　　　　　　　　　 // 初回呼び出し時
       TUG.mCurrentStart = performance.now();  // 開始時刻を設定
     }

    let     d = Math.floor( ( performance.now() - TUG.mCurrentStart ) * TUG.mFPS / 1000 ) - TUG.mCurrentFrame;
    if( d > 0 ) {
      TUG.onTimer( d );
      TUG.mCurrentFrame += d;
    }

  requestAnimationFrame( TUG.wmTimer )

}
