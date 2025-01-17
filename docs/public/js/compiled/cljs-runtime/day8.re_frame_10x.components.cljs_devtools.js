goog.provide('day8.re_frame_10x.components.cljs_devtools');
goog.scope(function(){
  day8.re_frame_10x.components.cljs_devtools.goog$module$goog$object = goog.module.get('goog.object');
});
day8.re_frame_10x.components.cljs_devtools.default_config = cljs.core.deref(devtools.prefs.default_config);
day8.re_frame_10x.components.cljs_devtools.base_config = (function day8$re_frame_10x$components$cljs_devtools$base_config(ambiance,syntax_color_scheme){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"symbol-style","symbol-style",1022654848),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),new cljs.core.Keyword(null,"body-field-td3-style","body-field-td3-style",53039394),new cljs.core.Keyword(null,"meta-reference-style","meta-reference-style",-1930118462),new cljs.core.Keyword(null,"header-style","header-style",-2122121341),new cljs.core.Keyword(null,"fn-args-style","fn-args-style",-2141623900),new cljs.core.Keyword(null,"expandable-inner-style","expandable-inner-style",-1596774780),new cljs.core.Keyword(null,"fn-header-style","fn-header-style",985447749),new cljs.core.Keyword(null,"fn-name-style","fn-name-style",-573451611),new cljs.core.Keyword(null,"fast-protocol-style","fast-protocol-style",-1668076410),new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.Keyword(null,"protocol-method-name-style","protocol-method-name-style",-718367832),new cljs.core.Keyword(null,"protocol-ns-name-style","protocol-ns-name-style",2075298601),new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Keyword(null,"body-field-value-style","body-field-value-style",752084266),new cljs.core.Keyword(null,"body-items-more-style","body-items-more-style",1518949066),new cljs.core.Keyword(null,"fn-prefix-style","fn-prefix-style",991677739),new cljs.core.Keyword(null,"expanded-string-style","expanded-string-style",-543781397),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),new cljs.core.Keyword(null,"type-wrapper-style","type-wrapper-style",-922880468),new cljs.core.Keyword(null,"body-field-td2-style","body-field-td2-style",-278192403),new cljs.core.Keyword(null,"type-header-style","type-header-style",1821477837),new cljs.core.Keyword(null,"standard-ol-no-margin-style","standard-ol-no-margin-style",-1701969586),new cljs.core.Keyword(null,"instance-custom-printing-wrapper-style","instance-custom-printing-wrapper-style",374945134),new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),new cljs.core.Keyword(null,"float-style","float-style",705926672),new cljs.core.Keyword(null,"bool-style","bool-style",-1275737743),new cljs.core.Keyword(null,"default-envelope-style","default-envelope-style",-1676750479),new cljs.core.Keyword(null,"string-style","string-style",744195825),new cljs.core.Keyword(null,"body-field-name-style","body-field-name-style",1518272241),new cljs.core.Keyword(null,"integer-style","integer-style",1568434578),new cljs.core.Keyword(null,"header-field-name-style","header-field-name-style",-804007278),new cljs.core.Keyword(null,"instance-type-header-style","instance-type-header-style",1601743858),new cljs.core.Keyword(null,"instance-custom-printing-style","instance-custom-printing-style",-716263405),new cljs.core.Keyword(null,"float-nan-style","float-nan-style",967384179),new cljs.core.Keyword(null,"fields-header-style","fields-header-style",-25300493),new cljs.core.Keyword(null,"body-field-td1-style","body-field-td1-style",988760979),new cljs.core.Keyword(null,"type-name-style","type-name-style",652886356),new cljs.core.Keyword(null,"float-infinity-style","float-infinity-style",-476570060),new cljs.core.Keyword(null,"instance-body-fields-table-style","instance-body-fields-table-style",-1457745996),new cljs.core.Keyword(null,"standard-li-no-margin-style","standard-li-no-margin-style",87138485),new cljs.core.Keyword(null,"slow-protocol-style","slow-protocol-style",-714284811),new cljs.core.Keyword(null,"item-style","item-style",-188747722),new cljs.core.Keyword(null,"index-style","index-style",93813430),new cljs.core.Keyword(null,"expandable-style","expandable-style",-501370920),new cljs.core.Keyword(null,"fn-multi-arity-args-indent-style","fn-multi-arity-args-indent-style",-1170401159),new cljs.core.Keyword(null,"type-ref-style","type-ref-style",-1940011911),new cljs.core.Keyword(null,"type-basis-style","type-basis-style",-1272137383),new cljs.core.Keyword(null,"fn-ns-name-style","fn-ns-name-style",-21387751),new cljs.core.Keyword(null,"native-reference-wrapper-style","native-reference-wrapper-style",578741818),new cljs.core.Keyword(null,"meta-wrapper-style","meta-wrapper-style",-1627075237),new cljs.core.Keyword(null,"meta-body-style","meta-body-style",-1858094980),new cljs.core.Keyword(null,"native-reference-style","native-reference-style",-1773393444),new cljs.core.Keyword(null,"aligned-li-style","aligned-li-style",43721341),new cljs.core.Keyword(null,"protocol-more-style","protocol-more-style",-870041570),new cljs.core.Keyword(null,"none-style","none-style",1613422814),new cljs.core.Keyword(null,"protocol-name-style","protocol-name-style",-1291847714),new cljs.core.Keyword(null,"keyword-style","keyword-style",-780643937),new cljs.core.Keyword(null,"meta-style","meta-style",1528213407)],[day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"nil","nil",99600501))], null)], 0)),false,day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0)], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-2))], null)], 0)),"",day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"fn","fn",-1175266204)),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"fast-protocol","fast-protocol",1016430030)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((6)),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"protocol","protocol",652470118))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"ns","ns",441598760))], null)], 0)),"",day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((6))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin","margin",-995903681)],[day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((14)),day8.re_frame_10x.styles.gs_50,day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"more","more",-2058821800)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((10)),new cljs.core.Keyword(null,"none","none",1333468478),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"more-background","more-background",763021144)),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], null),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),(0),(0),(0)], null)], null)])], 0)),"",day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_12,(0),day8.re_frame_10x.styles.gs_12], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"string","string",-1989541586)),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"expanded-string-border","expanded-string-border",106661998))], null)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0)], null)], null),new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"expanded-string-background","expanded-string-background",-916830349))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((14))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"type-text","type-text",-1047202666)),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], null),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),(3),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"float","float",-1732389368))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"bool","bool",1444635321))], null)], 0)),"",day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"string","string",-1989541586))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"field","field",-1302436500))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"integer","integer",-604721710))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"field","field",-1302436500))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"type-text","type-text",-1047202666)),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], null),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"float-nan","float-nan",1418746558))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_2], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"float-infinity","float-infinity",1137454398))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),(0),new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-2)),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((14))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"slow-protocol","slow-protocol",905914937)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((4))], null)], null),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"#000","#000",-1342202220)], null)], null),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_5,(0),day8.re_frame_10x.styles.gs_5], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1),(0),(0),(0))], null)], null)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"margin","margin",-995903681)],[day8.re_frame_10x.styles.gs_50,day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"index","index",-1531685915)),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"text-top","text-top",-582075565),new cljs.core.Keyword(null,"none","none",1333468478),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"index-background","index-background",-1459988065)),0.5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_2,(0),day8.re_frame_10x.styles.gs_2], null)], null),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),day8.re_frame_10x.styles.gs_2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),(0),(0),(0)], null)], null)])], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),day8.re_frame_10x.styles.gs_2], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"ns","ns",441598760))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"inset","inset",-396367740)], null)], null),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta","meta",1499536964)),new cljs.core.Keyword(null,"inset","inset",-396367740)], null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-1)),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((12))], null)], null),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3))], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-4)),(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-2))], null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((14))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((8)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862)], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"keyword","keyword",811389747))], null)], 0)),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(ambiance,syntax_color_scheme,new cljs.core.Keyword(null,"meta-text","meta-text",-1707028486)),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((3))], null)], null),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0))]);
});
day8.re_frame_10x.components.cljs_devtools.body_style_base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.styles.gs_2,day8.re_frame_10x.styles.gs_12], null)], null),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),day8.re_frame_10x.styles.nord3], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null);
day8.re_frame_10x.components.cljs_devtools.dark_ambiance_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord0,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord6], null)], 0)),new cljs.core.Keyword(null,"body-style","body-style",1462943820),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.body_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord0], null)], 0))], null);
day8.re_frame_10x.components.cljs_devtools.bright_ambiance_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord0], null)], 0)),new cljs.core.Keyword(null,"body-style","body-style",1462943820),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.body_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6], null)], 0))], null);
day8.re_frame_10x.components.cljs_devtools.custom_config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.default_config,day8.re_frame_10x.components.cljs_devtools.base_config(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891))], 0));
day8.re_frame_10x.components.cljs_devtools.header = (function day8$re_frame_10x$components$cljs_devtools$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38238 = arguments.length;
var i__5770__auto___38239 = (0);
while(true){
if((i__5770__auto___38239 < len__5769__auto___38238)){
args__5775__auto__.push((arguments[i__5770__auto___38239]));

var G__38240 = (i__5770__auto___38239 + (1));
i__5770__auto___38239 = G__38240;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic = (function (value,config,p__37871){
var vec__37872 = p__37871;
var map__37875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37872,(0),null);
var map__37875__$1 = cljs.core.__destructure_map(map__37875);
var render_paths_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875__$1,new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398));
var previous_config__37749__auto__ = devtools.prefs.get_prefs();
var prefs__37750__auto__ = (cljs.core.truth_(render_paths_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.custom_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512),true], null)], 0)):day8.re_frame_10x.components.cljs_devtools.custom_config);
try{devtools.prefs.set_prefs_BANG_(prefs__37750__auto__);

return devtools.formatters.core.header_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__37750__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__37750__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__37749__auto__);
}}));

(day8.re_frame_10x.components.cljs_devtools.header.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.header.cljs$lang$applyTo = (function (seq37856){
var G__37869 = cljs.core.first(seq37856);
var seq37856__$1 = cljs.core.next(seq37856);
var G__37870 = cljs.core.first(seq37856__$1);
var seq37856__$2 = cljs.core.next(seq37856__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37869,G__37870,seq37856__$2);
}));

day8.re_frame_10x.components.cljs_devtools.body = (function day8$re_frame_10x$components$cljs_devtools$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38242 = arguments.length;
var i__5770__auto___38243 = (0);
while(true){
if((i__5770__auto___38243 < len__5769__auto___38242)){
args__5775__auto__.push((arguments[i__5770__auto___38243]));

var G__38244 = (i__5770__auto___38243 + (1));
i__5770__auto___38243 = G__38244;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic = (function (value,config,p__37893){
var vec__37896 = p__37893;
var map__37899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37896,(0),null);
var map__37899__$1 = cljs.core.__destructure_map(map__37899);
var render_paths_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398));
var previous_config__37749__auto__ = devtools.prefs.get_prefs();
var prefs__37750__auto__ = (cljs.core.truth_(render_paths_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.custom_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512),true], null)], 0)):day8.re_frame_10x.components.cljs_devtools.custom_config);
try{devtools.prefs.set_prefs_BANG_(prefs__37750__auto__);

return devtools.formatters.core.body_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__37750__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__37750__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__37749__auto__);
}}));

(day8.re_frame_10x.components.cljs_devtools.body.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.body.cljs$lang$applyTo = (function (seq37885){
var G__37886 = cljs.core.first(seq37885);
var seq37885__$1 = cljs.core.next(seq37885);
var G__37887 = cljs.core.first(seq37885__$1);
var seq37885__$2 = cljs.core.next(seq37885__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37886,G__37887,seq37885__$2);
}));

day8.re_frame_10x.components.cljs_devtools.has_body = (function day8$re_frame_10x$components$cljs_devtools$has_body(value,config){
var previous_config__37749__auto__ = devtools.prefs.get_prefs();
var prefs__37750__auto__ = day8.re_frame_10x.components.cljs_devtools.custom_config;
try{devtools.prefs.set_prefs_BANG_(prefs__37750__auto__);

return devtools.formatters.core.has_body_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__37750__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__37750__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__37749__auto__);
}});
day8.re_frame_10x.components.cljs_devtools.get_object = (function day8$re_frame_10x$components$cljs_devtools$get_object(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).object;
});
day8.re_frame_10x.components.cljs_devtools.get_config = (function day8$re_frame_10x$components$cljs_devtools$get_config(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).config;
});
day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$jsonml_style_factory$(style_name37944,params37945){
var style37947 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name37944)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"signature-background","signature-background",-261963584))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["> span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"text-top","text-top",-582075565)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style37947),new cljs.core.Keyword(null,"name","name",1843675177),style_name37944], null);
});

var factory_name37946_38249 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$);
day8.re_frame_10x.components.cljs_devtools.jsonml_style = (function day8$re_frame_10x$components$cljs_devtools$jsonml_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name37946_38249,day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$toggle_style_factory$(style_name37955,params37956,ambiance){
var base_style37960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ambiance,new cljs.core.Keyword(null,"bright","bright",-1876684577)))?day8.re_frame_10x.styles.nord0:day8.re_frame_10x.styles.nord5)], null)], null)], null);
var key__36743__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style37960)));
var name37959 = (function (){var fexpr__37964 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__37964.cljs$core$IFn$_invoke$arity$3 ? fexpr__37964.cljs$core$IFn$_invoke$arity$3(style_name37955,key__36743__auto__,params37956) : fexpr__37964.call(null,style_name37955,key__36743__auto__,params37956));
})();
var style37958 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name37959)].join('')], null),base_style37960);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style37958),new cljs.core.Keyword(null,"name","name",1843675177),name37959], null);
});

var factory_name37957_38251 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$);
day8.re_frame_10x.components.cljs_devtools.toggle_style = (function day8$re_frame_10x$components$cljs_devtools$toggle_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name37957_38251,day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.components.cljs_devtools.data_structure = (function day8$re_frame_10x$components$cljs_devtools$data_structure(_,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),path], null));
return (function (jsonml,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.toggle_style(new cljs.core.Keyword(null,"bright","bright",-1876684577)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),path__$1], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null))], null)], null),(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return day8.re_frame_10x.components.cljs_devtools.has_body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
} else {
return and__5043__auto__;
}
})())?(function (){var G__37973 = day8.re_frame_10x.components.cljs_devtools.body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__37974 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__37973,G__37974) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__37973,G__37974));
})():(function (){var G__37975 = day8.re_frame_10x.components.cljs_devtools.header(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__37976 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"header","header",119441134));
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__37975,G__37976) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__37975,G__37976));
})())], null);
});
});
day8.re_frame_10x.components.cljs_devtools.data_structure_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$data_structure_with_path_annotations(_,___$1,___$2,p__37977){
var map__37978 = p__37977;
var map__37978__$1 = cljs.core.__destructure_map(map__37978);
var path_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37978__$1,new cljs.core.Keyword(null,"path-id","path-id",-73169688));
var expand_all_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expand-all?","day8.re-frame-10x.panels.app-db.subs/expand-all?",1843725491),path_id], null));
var render_paths_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881)], null));
return (function (jsonml,indexed_path,devtools_path,opts){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),indexed_path], null));
var show_body_QMARK_ = (function (){var and__5043__auto__ = day8.re_frame_10x.components.cljs_devtools.has_body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
if(cljs.core.truth_(and__5043__auto__)){
if(cljs.core.truth_(cljs.core.deref(expand_all_QMARK_))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5043__auto____$1 = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(expand_all_QMARK_),false);
} else {
return and__5043__auto____$1;
}
})())){
return true;
} else {
return null;
}
}
} else {
return and__5043__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.toggle_style(new cljs.core.Keyword(null,"bright","bright",-1876684577)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),indexed_path], null));

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-expand-all?","day8.re-frame-10x.panels.app-db.events/set-expand-all?",-703125874),path_id,null], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(show_body_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null))], null)], null),(cljs.core.truth_(show_body_QMARK_)?(function (){var G__37979 = day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398),cljs.core.deref(render_paths_QMARK_)], null)], 0));
var G__37980 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,new cljs.core.Keyword(null,"body","body",-2049205669));
var G__37981 = devtools_path;
var G__37982 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__37979,G__37980,G__37981,G__37982) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__37979,G__37980,G__37981,G__37982));
})():(function (){var G__37983 = day8.re_frame_10x.components.cljs_devtools.header(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__37984 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,new cljs.core.Keyword(null,"header","header",119441134));
var G__37985 = devtools_path;
var G__37986 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__37983,G__37984,G__37985,G__37986) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__37983,G__37984,G__37985,G__37986));
})())], null);
});
});
/**
 * This function converts jsonml css-strings to valid css maps for hiccup.
 *   Example: 'margin-left:0px;min-height:14px;' converts to
 *         {:margin-left '0px', :min-height '14px'}
 */
day8.re_frame_10x.components.cljs_devtools.string__GT_css = (function day8$re_frame_10x$components$cljs_devtools$string__GT_css(css_string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__37988){
var vec__37989 = p__37988;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37989,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37989,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37987_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__37987_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(css_string,/;/)));
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup = (function day8$re_frame_10x$components$cljs_devtools$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__37993 = jsonml;
var seq__37996 = cljs.core.seq(vec__37993);
var first__37997 = cljs.core.first(seq__37996);
var seq__37996__$1 = cljs.core.next(seq__37996);
var tag_name = first__37997;
var first__37997__$1 = cljs.core.first(seq__37996__$1);
var seq__37996__$2 = cljs.core.next(seq__37996__$1);
var attributes = first__37997__$1;
var children = seq__37996__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.components.cljs_devtools.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__38001 = child;
var G__38002 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__38001,G__38002) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__38001,G__38002));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.data_structure,jsonml,path], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"annotation")){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__38003 = child;
var G__38004 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__38003,G__38004) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null,G__38003,G__38004));
})),children);
} else {
return jsonml;

}
}
}
}
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$jsonml__GT_hiccup_with_path_annotations(jsonml,indexed_path,devtools_path,p__38008){
var map__38009 = p__38008;
var map__38009__$1 = cljs.core.__destructure_map(map__38009);
var opts = map__38009__$1;
var click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009__$1,new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084));
var middle_click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009__$1,new cljs.core.Keyword(null,"middle-click-listener","middle-click-listener",-1619151179));
var menu_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009__$1,new cljs.core.Keyword(null,"menu-listener","menu-listener",-1541878230));
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__38010 = jsonml;
var seq__38011 = cljs.core.seq(vec__38010);
var first__38012 = cljs.core.first(seq__38011);
var seq__38011__$1 = cljs.core.next(seq__38011);
var tag_name = first__38012;
var first__38012__$1 = cljs.core.first(seq__38011__$1);
var seq__38011__$2 = cljs.core.next(seq__38011__$1);
var attributes = first__38012__$1;
var children = seq__38011__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.components.cljs_devtools.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__38015 = child;
var G__38016 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__38017 = devtools_path;
var G__38018 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__38015,G__38016,G__38017,G__38018) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__38015,G__38016,G__38017,G__38018));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.data_structure_with_path_annotations,jsonml,indexed_path,devtools_path,opts], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"annotation")){
var jsonml_path_index = cljs.core.last(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
var absolute_devtools_path = (cljs.core.truth_(jsonml_path_index)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools_path,jsonml_path_index):devtools_path);
var element_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var child_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var child_value = (((child_element instanceof Array))?cljs.core.nth.cljs$core$IFn$_invoke$arity$3(child_element,(2),null):null);
if(((typeof child_value === 'string') || (((typeof child_value === 'number') || ((child_value instanceof cljs.core.Keyword)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (component){
var component__$1 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node(component);
goog.events.listen(component__$1,"contextmenu",menu_listener);

goog.events.listen(component__$1,"dblclick",click_listener);

return goog.events.listen(component__$1,"mousedown",middle_click_listener);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),element_id,new cljs.core.Keyword(null,"class","class",-2030961996),"path-annotation",new cljs.core.Keyword(null,"data-path","data-path",674802181),cljs.core.str.cljs$core$IFn$_invoke$arity$1(absolute_devtools_path)], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,child){
var G__38021 = child;
var G__38022 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__38023 = absolute_devtools_path;
var G__38024 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__38021,G__38022,G__38023,G__38024) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__38021,G__38022,G__38023,G__38024));
}),children));
})], null))], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,child){
var G__38026 = child;
var G__38027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__38028 = absolute_devtools_path;
var G__38029 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__38026,G__38027,G__38028,G__38029) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null,G__38026,G__38027,G__38028,G__38029));
}),children));
}
} else {
return jsonml;

}
}
}
}
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_ = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_QMARK_(data){
return ((typeof data === 'string') || ((((data instanceof RegExp)) || (((typeof data === 'number') || (((cljs.core.boolean_QMARK_(data)) || ((data == null)))))))));
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_style_factory$(style_name38043,params38044){
var style38046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name38043)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"signature-background","signature-background",-261963584)),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"bool","bool",1444635321))], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style38046),new cljs.core.Keyword(null,"name","name",1843675177),style_name38043], null);
});

var factory_name38045_38296 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$);
day8.re_frame_10x.components.cljs_devtools.prn_str_render_style = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name38045_38296,day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.prn_str_render_style()], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
day8.re_frame_10x.components.cljs_devtools.simple_render = (function day8$re_frame_10x$components$cljs_devtools$simple_render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38299 = arguments.length;
var i__5770__auto___38300 = (0);
while(true){
if((i__5770__auto___38300 < len__5769__auto___38299)){
args__5775__auto__.push((arguments[i__5770__auto___38300]));

var G__38301 = (i__5770__auto___38300 + (1));
i__5770__auto___38300 = G__38301;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__38060){
var vec__38061 = p__38060;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061,(0),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.cljs_devtools.jsonml_style())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),((day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_(data))?day8.re_frame_10x.components.cljs_devtools.prn_str_render(data):day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup(day8.re_frame_10x.components.cljs_devtools.header(data,null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))))], null);
}));

(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$lang$applyTo = (function (seq38052){
var G__38054 = cljs.core.first(seq38052);
var seq38052__$1 = cljs.core.next(seq38052);
var G__38055 = cljs.core.first(seq38052__$1);
var seq38052__$2 = cljs.core.next(seq38052__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38054,G__38055,seq38052__$2);
}));

day8.re_frame_10x.components.cljs_devtools.popup_menus = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
day8.re_frame_10x.components.cljs_devtools.event_log = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
day8.re_frame_10x.components.cljs_devtools.build_popup = (function day8$re_frame_10x$components$cljs_devtools$build_popup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38303 = arguments.length;
var i__5770__auto___38305 = (0);
while(true){
if((i__5770__auto___38305 < len__5769__auto___38303)){
args__5775__auto__.push((arguments[i__5770__auto___38305]));

var G__38306 = (i__5770__auto___38305 + (1));
i__5770__auto___38305 = G__38306;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.build_popup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.build_popup.cljs$core$IFn$_invoke$arity$variadic = (function (app_db,path,indexed_path,html_element,p__38073){
var vec__38074 = p__38073;
var html_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38074,(0),null);
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.components.cljs_devtools.popup_menus),html_element.id);
if(cljs.core.truth_(temp__5802__auto__)){
var rendered_QMARK_ = temp__5802__auto__;
return rendered_QMARK_.setVisible(true);
} else {
var popup_menu = (new goog.ui.PopupMenu());
var js_menu_style = goog.style.toStyleAttribute(({"text-align": "center", "padding": "10px", "border": "1px solid #b9bdc6"}));
var create_menu_item = (function (menu_text){
return (new goog.ui.MenuItem((function (){var G__38081 = goog.dom.createDom(goog.dom.TagName.DIV,({}),goog.dom.createDom(goog.dom.TagName.SPAN,({}),menu_text));
G__38081.setAttribute("style",js_menu_style);

return G__38081;
})()));
});
var copy_path_item = create_menu_item("Copy path");
var copy_obj_item = create_menu_item("Copy object");
var copy_repl_item = create_menu_item("Copy REPL command");
var element_rect = html_element.getBoundingClientRect();
var target_rect = (cljs.core.truth_(html_target)?html_target.getBoundingClientRect():null);
var target_x_offset = (cljs.core.truth_(target_rect)?(target_rect.left + window.scrollX):null);
var element_x_pos = (element_rect.left + window.scrollX);
var menu_x_pos = (cljs.core.truth_(target_x_offset)?(element_x_pos - target_x_offset):element_x_pos);
var menu_y_pos = (element_rect.top + window.scrollY);
var G__38086_38308 = copy_path_item;
G__38086_38308.addClassName("copy-path");

G__38086_38308.addClassName("10x-menu-item");


var G__38091_38309 = copy_obj_item;
G__38091_38309.addClassName("copy-object");

G__38091_38309.addClassName("10x-menu-item");


var G__38092_38310 = copy_repl_item;
G__38092_38310.addClassName("copy-repl");

G__38092_38310.addClassName("10x-menu-item");


var G__38095_38312 = popup_menu;
G__38095_38312.addItem(copy_path_item);

G__38095_38312.addItem(copy_obj_item);

G__38095_38312.addItem(copy_repl_item);

G__38095_38312.showAt(menu_x_pos,menu_y_pos);

G__38095_38312.render((function (){var or__5045__auto__ = html_target;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return html_element;
}
})());


goog.object.forEach(goog.ui.Component.EventType,(function (type){
return goog.events.listen(popup_menu,type,(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"hide")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(cljs.core.deref(day8.re_frame_10x.components.cljs_devtools.event_log)),"highlight")){
return e.preventDefault();
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.type,"action")){
var class_names = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(e.target.getExtraClassNames());
var object = day8.re_frame_10x.tools.coll.get_in_with_lists_and_sets(app_db,path);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.components.cljs_devtools.event_log,cljs.core.conj,"action");

if(cljs.core.truth_(cljs.core.some((function (class_name){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"copy-object");
}),class_names))){
if(cljs.core.truth_((function (){var or__5045__auto__ = object;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(object,false);
}
})())){
return day8.re_frame_10x.fx.clipboard.copy_BANG_(object);
} else {
return console.error("Could not copy!");
}
} else {
if(cljs.core.truth_(cljs.core.some((function (class_name){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"copy-path");
}),class_names))){
return day8.re_frame_10x.fx.clipboard.copy_BANG_(path);
} else {
if(cljs.core.truth_(cljs.core.some((function (class_name){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"copy-repl");
}),class_names))){
return day8.re_frame_10x.fx.clipboard.copy_BANG_(["(simple-render-with-path-annotations ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app_db)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db-path",indexed_path], null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),")"].join(''));
} else {
return null;
}
}
}
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.components.cljs_devtools.event_log,cljs.core.conj,e.type);

}
}
}));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.components.cljs_devtools.popup_menus,cljs.core.assoc,html_element.id,popup_menu);
}
}));

(day8.re_frame_10x.components.cljs_devtools.build_popup.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.build_popup.cljs$lang$applyTo = (function (seq38068){
var G__38069 = cljs.core.first(seq38068);
var seq38068__$1 = cljs.core.next(seq38068);
var G__38070 = cljs.core.first(seq38068__$1);
var seq38068__$2 = cljs.core.next(seq38068__$1);
var G__38071 = cljs.core.first(seq38068__$2);
var seq38068__$3 = cljs.core.next(seq38068__$2);
var G__38072 = cljs.core.first(seq38068__$3);
var seq38068__$4 = cljs.core.next(seq38068__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38069,G__38070,G__38071,G__38072,seq38068__$4);
}));

day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$simple_render_with_path_annotations(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38316 = arguments.length;
var i__5770__auto___38317 = (0);
while(true){
if((i__5770__auto___38317 < len__5769__auto___38316)){
args__5775__auto__.push((arguments[i__5770__auto___38317]));

var G__38318 = (i__5770__auto___38317 + (1));
i__5770__auto___38317 = G__38318;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations.cljs$core$IFn$_invoke$arity$variadic = (function (data,indexed_path,p__38138,p__38139){
var map__38141 = p__38138;
var map__38141__$1 = cljs.core.__destructure_map(map__38141);
var opts = map__38141__$1;
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38141__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var update_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38141__$1,new cljs.core.Keyword(null,"update-path-fn","update-path-fn",878085992));
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38141__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var vec__38142 = p__38139;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38142,(0),null);
var render_paths_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881)], null));
var open_new_inspectors_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","open-new-inspectors?","day8.re-frame-10x.panels.settings.subs/open-new-inspectors?",965777560)], null)));
var data__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = sort_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.map_QMARK_(data);
} else {
return and__5043__auto__;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),data):data);
var input_field_path = cljs.core.second(indexed_path);
var shadow_root = document.getElementById("--re-frame-10x--").shadowRoot.children;
var root_div = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (element){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element.tagName,"DIV");
}),shadow_root));
var menu_html_target = (cljs.core.truth_(root_div)?root_div.firstChild:null);
var menu_html_target__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu_html_target.childElementCount,(2)))?menu_html_target.lastChild:null);
var menu_listener = (function (event){
var target = event.target.parentElement;
var path = target.getAttribute("data-path");
var path_obj = day8.re_frame_10x.tools.reader.edn.read_string_maybe(path);
event.preventDefault();

return day8.re_frame_10x.components.cljs_devtools.build_popup.cljs$core$IFn$_invoke$arity$variadic(object,path_obj,indexed_path,target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([menu_html_target__$1], 0));
});
var click_listener = (function (event){
var target = event.target.parentElement;
var path = target.getAttribute("data-path");
var btn = event.button;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(btn,(0))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(update_path_fn,path));
} else {
return null;
}
});
var middle_click_listener = (function (event){
var target = event.target.parentElement;
var path = target.getAttribute("data-path");
var btn = event.button;
event.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(btn,(1))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path-and-skip-to","day8.re-frame-10x.panels.app-db.events/create-path-and-skip-to",-195622997),path,open_new_inspectors_QMARK_], null));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.cljs_devtools.jsonml_style())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),((day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_(data__$1))?day8.re_frame_10x.components.cljs_devtools.prn_str_render(data__$1):day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations(day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic(data__$1,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398),cljs.core.deref(render_paths_QMARK_)], null)], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,(0)),(function (){var or__5045__auto__ = input_field_path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084),click_listener,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"middle-click-listener","middle-click-listener",-1619151179),middle_click_listener,new cljs.core.Keyword(null,"menu-listener","menu-listener",-1541878230),menu_listener], 0))))], null);
}));

(day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations.cljs$lang$applyTo = (function (seq38132){
var G__38133 = cljs.core.first(seq38132);
var seq38132__$1 = cljs.core.next(seq38132);
var G__38134 = cljs.core.first(seq38132__$1);
var seq38132__$2 = cljs.core.next(seq38132__$1);
var G__38135 = cljs.core.first(seq38132__$2);
var seq38132__$3 = cljs.core.next(seq38132__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38133,G__38134,G__38135,seq38132__$3);
}));


//# sourceMappingURL=day8.re_frame_10x.components.cljs_devtools.js.map
