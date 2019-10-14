@extends('layouts.app')

@section('title')

@section('content')

    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">  
        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">1空气</div>
                <div class="allnav" id="echart1"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">2水</div>
                <div class="allnav" id="echart2"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6">
            <div class="boxall_3d">
                <div class="alltitle">3全景地图</div>
                <div class="allnav" id="echart3"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">4营养</div>
                <div class="allnav" id="echart4"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">5安防</div>
                <div class="allnav" id="e555">
                    <div class="radar">
                        <div class="line"></div>
                    </div>


                </div>
                
                <div class="boxfoot"></div>
            </div>
        </div>

    </div>      

    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">  
        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">6光强</div>
                <div class="allnav" id="e666"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">7健身</div>
                <div class="allnav" id="e777"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">8舒适</div>
                <div class="allnav" id="e888"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">9消防</div>
                <div class="boxfoot"></div>
            </div>
        </div>
    </div>  

@stop