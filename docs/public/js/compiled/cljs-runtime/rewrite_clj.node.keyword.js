goog.provide('rewrite_clj.node.keyword');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.keyword.KeywordNode = (function (k,namespaced_QMARK_,__meta,__extmap,__hash){
this.k = k;
this.namespaced_QMARK_ = namespaced_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.keyword.KeywordNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38120,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38137 = k38120;
var G__38137__$1 = (((G__38137 instanceof cljs.core.Keyword))?G__38137.fqn:null);
switch (G__38137__$1) {
case "k":
return self__.k;

break;
case "namespaced?":
return self__.namespaced_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38120,else__5346__auto__);

}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38149){
var vec__38150 = p__38149;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38150,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38150,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.keyword.KeywordNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_],null))], null),self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38119){
var self__ = this;
var G__38119__$1 = this;
return (new cljs.core.RecordIter((0),G__38119__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1681863292 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38122,other38123){
var self__ = this;
var this38122__$1 = this;
return (((!((other38123 == null)))) && ((((this38122__$1.constructor === other38123.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38122__$1.k,other38123.k)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38122__$1.namespaced_QMARK_,other38123.namespaced_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38122__$1.__extmap,other38123.__extmap)))))))));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__5043__auto__ = self__.namespaced_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.namespace(self__.k));
} else {
return and__5043__auto__;
}
})())){
throw (new Error("Namespaced keywords not supported !"));
} else {
return self__.k;
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c = (((cljs.core.name(self__.k)).length) + (1));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return (c + (1));
} else {
var temp__5802__auto__ = cljs.core.namespace(self__.k);
if(cljs.core.truth_(temp__5802__auto__)){
var nspace = temp__5802__auto__;
return (((1) + c) + ((nspace).length));
} else {
return c;
}
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.k], 0));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return [":",v].join('');
} else {
return v;
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38120){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38165 = k38120;
var G__38165__$1 = (((G__38165 instanceof cljs.core.Keyword))?G__38165.fqn:null);
switch (G__38165__$1) {
case "k":
case "namespaced?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38120);

}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38119){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38264 = cljs.core.keyword_identical_QMARK_;
var expr__38265 = k__5352__auto__;
if(cljs.core.truth_((pred__38264.cljs$core$IFn$_invoke$arity$2 ? pred__38264.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__38265) : pred__38264.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__38265)))){
return (new rewrite_clj.node.keyword.KeywordNode(G__38119,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38264.cljs$core$IFn$_invoke$arity$2 ? pred__38264.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),expr__38265) : pred__38264.call(null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),expr__38265)))){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,G__38119,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38119),null));
}
}
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_,null))], null),self__.__extmap));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38119){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,G__38119,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.keyword.KeywordNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"namespaced?","namespaced?",763218650,null)], null);
}));

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$type = true);

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.keyword/KeywordNode",null,(1),null));
}));

(rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.keyword/KeywordNode");
}));

/**
 * Positional factory function for rewrite-clj.node.keyword/KeywordNode.
 */
rewrite_clj.node.keyword.__GT_KeywordNode = (function rewrite_clj$node$keyword$__GT_KeywordNode(k,namespaced_QMARK_){
return (new rewrite_clj.node.keyword.KeywordNode(k,namespaced_QMARK_,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.keyword/KeywordNode, taking a map of keywords to field values.
 */
rewrite_clj.node.keyword.map__GT_KeywordNode = (function rewrite_clj$node$keyword$map__GT_KeywordNode(G__38126){
var extmap__5385__auto__ = (function (){var G__38274 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38126,new cljs.core.Keyword(null,"k","k",-2146297393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877)], 0));
if(cljs.core.record_QMARK_(G__38126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38274);
} else {
return G__38274;
}
})();
return (new rewrite_clj.node.keyword.KeywordNode(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__38126),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877).cljs$core$IFn$_invoke$arity$1(G__38126),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

/**
 * Create node representing a keyword. If `namespaced?` is given as `true`
 * a keyword à la `::x` or `::ns/x` (i.e. namespaced/aliased) is generated.
 */
rewrite_clj.node.keyword.keyword_node = (function rewrite_clj$node$keyword$keyword_node(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38325 = arguments.length;
var i__5770__auto___38326 = (0);
while(true){
if((i__5770__auto___38326 < len__5769__auto___38325)){
args__5775__auto__.push((arguments[i__5770__auto___38326]));

var G__38328 = (i__5770__auto___38326 + (1));
i__5770__auto___38326 = G__38328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__38288){
var vec__38289 = p__38288;
var namespaced_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38289,(0),null);
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? k)"));
}

return rewrite_clj.node.keyword.__GT_KeywordNode(k,namespaced_QMARK_);
}));

(rewrite_clj.node.keyword.keyword_node.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.node.keyword.keyword_node.cljs$lang$applyTo = (function (seq38278){
var G__38279 = cljs.core.first(seq38278);
var seq38278__$1 = cljs.core.next(seq38278);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38279,seq38278__$1);
}));


//# sourceMappingURL=rewrite_clj.node.keyword.js.map
