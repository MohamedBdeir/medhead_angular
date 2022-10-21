"use strict";(self.webpackChunkmedhead=self.webpackChunkmedhead||[]).push([[525],{1525:(fe,O,c)=>{c.r(O),c.d(O,{HopitalHomeModule:()=>he});var p=c(6895),e=c(1571),m=c(6199),u=c(7391),Z=c(6626),x=c(9347),N=c(8761),g=c(2687),q=c(7556),T=c(2216);function B(i,s){if(1&i&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.hopital.name)}}let f=(()=>{class i{constructor(t,n,o,a){this.router=t,this.authService=n,this.hopitalService=o,this.jwtService=a,this.faHome=g.J9Y,this.faHospitalAlt=g.v7e,this.faHeartbeat=g.s2n,this.faUser=g.ILF,this.faSignOut=g.HEx,this.getHopistalName()}ngOnInit(){}navigateToDashboard(){this.router.navigate(["HMenu"])}navigateToSpecialites(){this.router.navigate(["HMenu","addSpecToHopital"])}logout(){this.authService.logout(),this.router.navigate([""])}getHopistalName(){let t=this.jwtService.getUserId();this.hopitalService.getHopitalByUserId(t).subscribe(n=>{this.hopital=n.hopital})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x.F0),e.Y36(q.e),e.Y36(m.x),e.Y36(u.o))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-hopital-menu"]],decls:12,vars:4,consts:[[1,"container"],["class","connected",4,"ngIf"],[1,"controls"],[1,"menuItem",3,"click"],[1,"icon",3,"icon"],[1,"menuItem"],[1,"icon",3,"icon","click"],[1,"connected"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,B,2,1,"div",1),e.TgZ(2,"div",2)(3,"div",3),e.NdJ("click",function(){return n.navigateToDashboard()}),e._UZ(4,"fa-icon",4),e._uU(5," Accueil "),e.qZA(),e.TgZ(6,"div",5)(7,"fa-icon",6),e.NdJ("click",function(){return n.navigateToSpecialites()}),e.qZA(),e._uU(8,"Sp\xe9cialit\xe9s "),e.qZA(),e.TgZ(9,"div",3),e.NdJ("click",function(){return n.logout()}),e._UZ(10,"fa-icon",4),e._uU(11,"Se d\xe9connecter "),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.hopital),e.xp6(3),e.Q6J("icon",n.faHome),e.xp6(3),e.Q6J("icon",n.faHeartbeat),e.xp6(3),e.Q6J("icon",n.faSignOut))},dependencies:[p.O5,T.BN],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:4fr 12fr;height:8vh;background:rgb(66,77,107);background:linear-gradient(180deg,rgba(66,77,107,1) 0%,rgba(29,44,79,1) 100%);justify-items:end}.connected[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center}.controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}.menuItem[_ngcontent-%COMP%]{margin:.5em 2em;transition:all .2s;color:#fff;cursor:pointer}.menuItem[_ngcontent-%COMP%]:hover{border-bottom:3px solid #7ae495}"]}),i})();function J(i,s){if(1&i&&(e.TgZ(0,"div",12),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij(" Vous avez ",t.urgences," cas d'urgence en route ")}}function P(i,s){1&i&&(e.TgZ(0,"div",12),e._uU(1," Vous n'avez pas encore d\xe9fini la localisation de votre centre "),e.qZA())}function w(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),e._UZ(4,"img",5),e.qZA()(),e.TgZ(5,"div",6)(6,"h1",7),e._uU(7,"Urgences et reservations"),e.qZA(),e.TgZ(8,"div",8),e._uU(9," Consulter et g\xe9rer les reservations et les urgences "),e.YNc(10,J,2,1,"div",9),e.qZA()()(),e.TgZ(11,"div",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.navigateToSpecialites())}),e.TgZ(12,"div",3)(13,"div",4),e._UZ(14,"img",11),e.qZA()(),e.TgZ(15,"div",6)(16,"h1",7),e._uU(17,"Les sp\xe9cialit\xe9s"),e.qZA(),e.TgZ(18,"div",8),e._uU(19," G\xe9rer les sp\xe9cialit\xe9s et domaines pris en comptes dans votre h\xf4pital "),e._UZ(20,"div",12),e.qZA()()(),e.TgZ(21,"div",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.setDetails())}),e.TgZ(22,"div",3)(23,"div",4),e._UZ(24,"img",13),e.qZA()(),e.TgZ(25,"div",6)(26,"h1",7),e._uU(27,"Gestion du compte"),e.qZA(),e.TgZ(28,"div",8),e._uU(29," G\xe9rer votre compte et les informations li\xe9es \xe0 votre institution "),e.YNc(30,P,2,0,"div",9),e.qZA()()(),e.TgZ(31,"div",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.gestionLits())}),e.TgZ(32,"div",3)(33,"div",4),e._UZ(34,"img",14),e.qZA()(),e.TgZ(35,"div",6)(36,"h1",7),e._uU(37,"Gestion des lits"),e.qZA(),e.TgZ(38,"div",8),e._uU(39," G\xe9rer les lits et la capacit\xe9 d'accueil pour les urgences et les consultations "),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(10),e.Q6J("ngIf",t.urgences&&t.urgences>0),e.xp6(20),e.Q6J("ngIf",null==t.hopital.addresse)}}let D=(()=>{class i{constructor(t,n,o,a,l){this.hopitalService=t,this.jwtHandler=n,this.specService=o,this.router=a,this.reservationService=l,this.specialites=[],this.getHopital()}countReservations(){this.jwtHandler.getUserId(),this.reservationService.countReservationByHopital(this.hopital.id).subscribe(n=>{this.urgences=n.count})}ngOnInit(){}getHopital(){let t=this.jwtHandler.getUserId();this.hopitalService.getHopitalByUserId(t).subscribe(n=>{this.hopital=n.hopital,this.countReservations()})}navigateToSpecialites(){this.router.navigate(["HMenu","addSpecToHopital"])}setDetails(){this.router.navigate(null==this.hopital.addresse?["HMenu","setDetails"]:["HMenu","viewDetails"])}gestionLits(){this.router.navigate(["HMenu","lits"])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.x),e.Y36(u.o),e.Y36(Z.R),e.Y36(x.F0),e.Y36(N.D))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:2,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"tile"],[1,"left"],[1,"illustration"],["src","https://i.postimg.cc/y8FTP6gx/notify.png","alt","",1,"illustration-img"],[1,"right"],[1,"tileHeader"],[1,"content"],["class","notification",4,"ngIf"],[1,"tile",3,"click"],["src","https://i.postimg.cc/B6FdY1DT/specialite.png","alt","",1,"illustration-img"],[1,"notification"],["src","https://i.postimg.cc/d1w2RN1d/batiment.png","alt","",1,"illustration-img"],["src","https://i.postimg.cc/4xTkHV7V/patients.png","alt","",1,"illustration-img"]],template:function(t,n){1&t&&(e._UZ(0,"app-hopital-menu"),e.YNc(1,w,40,2,"div",0)),2&t&&(e.xp6(1),e.Q6J("ngIf",n.hopital))},dependencies:[p.O5,f],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:60vw;margin:1em auto auto}.tile[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;box-shadow:1px 1px 1px #d3d3d3;border:1px solid lightgray;transition:all .2s;cursor:pointer}h1[_ngcontent-%COMP%]{margin:1em;border:0;display:flex;justify-content:center;align-items:center}.tile[_ngcontent-%COMP%] + .tile[_ngcontent-%COMP%]{margin-top:1em}.tileBody[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;margin:.5em}.illustration-img[_ngcontent-%COMP%]{width:140%}.illustration[_ngcontent-%COMP%]{display:flex;flex-direction:column}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:.5em;font-size:1.2em}.notification[_ngcontent-%COMP%]{color:#f17171;font-size:.8em;margin-top:1em}.left[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center}.right[_ngcontent-%COMP%]{flex:4}.tile[_ngcontent-%COMP%]:hover{transform:scale(1.05);background-color:#edfff4}"]}),i})();var r=c(433),_=c(217),S=c(3360),v=c(881),U=c(322),M=c(209),C=c(4859),H=c(1572),h=c(9549),I=c(5113),L=c(3238);function Y(i,s){1&i&&(e.TgZ(0,"div",5),e._UZ(1,"mat-spinner",6),e.qZA())}function j(i,s){if(1&i&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.Q6J("value",t.groupeID),e.xp6(1),e.hij(" ",t.name," ")}}function E(i,s){if(1&i&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function Q(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"h2"),e._uU(2,"S\xe9lectionnez les sp\xe9cialit\xe9s prises en charge au sein de votre centre"),e.qZA(),e._UZ(3,"img",8),e.TgZ(4,"form",9)(5,"mat-form-field",10)(6,"mat-label"),e._uU(7,"Groupe de sp\xe9cialit\xe9s"),e.qZA(),e.TgZ(8,"mat-select",11),e.NdJ("valueChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.getSpecByGroupeID(o))}),e.YNc(9,j,2,2,"mat-option",12),e.qZA()(),e.TgZ(10,"mat-form-field",10)(11,"mat-label"),e._uU(12,"Sp\xe9cialit\xe9s disponibles"),e.qZA(),e.TgZ(13,"mat-select",11),e.NdJ("valueChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.selectSpec(o))}),e.YNc(14,E,2,2,"mat-option",12),e.qZA()(),e.TgZ(15,"button",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.addSpec())}),e._uU(16," Ajouter"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("formGroup",t.addSpecForm),e.xp6(5),e.Q6J("ngForOf",t.groupesOptions),e.xp6(5),e.Q6J("ngForOf",t.specialiteOptions)}}function k(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",16),e._uU(2,"Sp\xe9cialit\xe9: "),e.qZA(),e.TgZ(3,"div",17),e._uU(4),e.qZA(),e.TgZ(5,"div",16),e._uU(6,"Groupe: "),e.qZA(),e.TgZ(7,"div",17),e._uU(8),e.qZA(),e.TgZ(9,"button",18),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.deleteSpec(a.id))}),e._uU(10,"Retirer"),e.qZA()()}if(2&i){const t=s.$implicit;e.xp6(4),e.Oqu(t.name),e.xp6(4),e.Oqu(t.groupe.name)}}let G=(()=>{class i{constructor(t,n,o,a){this.formBuilder=t,this.specService=n,this.hopitalService=o,this.jwtHandlerService=a,this.isAddFormLoading=!1,this.isListSpecsLoading=!1,this.groupesOptions=[],this.specialiteOptions=[],this.specialitesHopital=[],this.stompClient=null,this.addSpecForm=this.formBuilder.group({groupName:["",r.kI.required],specName:["",r.kI.required]}),this.getGroupes(),this.getListSpec()}ngOnDestroy(){this.disconnect()}ngOnInit(){this.connectToSocket()}getGroupes(){this.isAddFormLoading=!0,this.specService.getAllGroupes().subscribe(t=>{this.groupesOptions=t.groupes,this.isAddFormLoading=!1})}getSpecByGroupeID(t){this.specService.getSpecialiteByGroupeId(t).subscribe(o=>{this.specialiteOptions=o.specialites})}selectSpec(t){this.addSpecForm.get("specName").setValue(t)}addSpec(){this.isAddFormLoading=!0;let t=this.addSpecForm.get("specName").value;console.log({specID:t});let n=this.jwtHandlerService.getUserId();this.hopitalService.getHopitalByUserId(n).subscribe(o=>{this.specService.addSpecialiteToHopital(o.hopital.id,t).subscribe(a=>{null==a.exceptionMessage?_.H.successMessage("Sp\xe9cialit\xe9 ajout\xe9e"):S.q.errorMessage(a.exceptionMessage),this.isAddFormLoading=!1})})}getListSpec(){let t=this.jwtHandlerService.getUserId();this.hopitalService.getHopitalByUserId(t).subscribe(n=>{this.specService.getSpecsByHopitalID(n.hopital.id).subscribe(o=>{this.specialitesHopital=o.specs})})}connectToSocket(){let t=new M(v.Y);this.stompClient=U.over(t),this.stompClient.connect({},()=>{this.stompClient.subscribe("/topic/updateHospitalSpecList",()=>{this.getListSpec()})})}disconnect(){this.stompClient.disconnect()}deleteSpec(t){let n=this.jwtHandlerService.getUserId();this.hopitalService.getHopitalByUserId(n).subscribe(o=>{this.specService.deleteSpecFromHopital(t,o.hopital.id).subscribe(a=>{_.H.successMessage("Sp\xe9cialit\xe9 retir\xe9e")})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.qu),e.Y36(Z.R),e.Y36(m.x),e.Y36(u.o))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-spec-to-hopital"]],decls:8,vars:3,consts:[[1,"container"],["class","loading",4,"ngIf"],["class","addSpecFormContainer",4,"ngIf"],[1,"specsList"],["class","specLine",4,"ngFor","ngForOf"],[1,"loading"],["diameter","60"],[1,"addSpecFormContainer"],["src","https://i.postimg.cc/d1nf0zH1/ajouter-Spec-To-Hopital.png"],[1,"addSpecForm",3,"formGroup"],["appearance","fill"],[3,"valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-button","",1,"primary",3,"click"],[3,"value"],[1,"specLine"],[1,"key"],[1,"value"],["mat-button","",1,"retirer","warn",3,"click"]],template:function(t,n){1&t&&(e._UZ(0,"app-hopital-menu"),e.TgZ(1,"div",0),e.YNc(2,Y,2,0,"div",1),e.YNc(3,Q,17,3,"div",2),e.TgZ(4,"div",3)(5,"h2"),e._uU(6,"Liste des sp\xe9cialit\xe9s prises en charge"),e.qZA(),e.YNc(7,k,11,2,"div",4),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.isAddFormLoading),e.xp6(1),e.Q6J("ngIf",!n.isAddFormLoading),e.xp6(4),e.Q6J("ngForOf",n.specialitesHopital))},dependencies:[p.sg,p.O5,r._Y,r.JL,r.sg,C.lW,H.Ou,h.KE,h.hX,I.gD,L.ey,f],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;grid-column-gap:1em;padding:2em;justify-content:center;margin:1em}img[_ngcontent-%COMP%]{width:15vw}.addSpecFormContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:stretch;align-items:center;border:1px solid #55c595;border-radius:.3em;padding:1em}.addSpecForm[_ngcontent-%COMP%]{display:grid;flex-direction:column;width:100%}.specLine[_ngcontent-%COMP%] + .specLine[_ngcontent-%COMP%]{border-top:1px solid #359d9e}.specLine[_ngcontent-%COMP%]{padding:.5em;transition:all .2s;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;align-items:center}.value[_ngcontent-%COMP%]{font-weight:700}.specLine[_ngcontent-%COMP%]:hover{background-color:#cff4d2}"]}),i})();var y=c(4144),z=c(4440),F=c(1481);function R(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",14),e._uU(1),e.TgZ(2,"div",15)(3,"div",16),e._uU(4," Type: "),e.qZA(),e.TgZ(5,"div",17),e._uU(6),e.qZA()(),e.TgZ(7,"button",18),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.setAddresse(a))}),e._uU(8,"D\xe9finir comme adresse"),e.qZA()()}if(2&i){const t=s.$implicit;e.xp6(1),e.hij(" ",t.display_name," "),e.xp6(5),e.hij(" ",t.type," ")}}function $(i,s){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"iframe",11),e.TgZ(2,"div",12)(3,"h2"),e._uU(4,"R\xe9sultats"),e.qZA(),e.YNc(5,R,9,2,"div",13),e.qZA()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("src",t.urlSafe,e.uOi),e.xp6(4),e.Q6J("ngForOf",t.addressesList)}}function K(i,s){1&i&&(e.TgZ(0,"div",19),e._uU(1," Saisissez un terme de recheche pour afficher les adresses "),e.qZA())}let X=(()=>{class i{constructor(t,n,o,a,l){this.addressService=t,this.formBuilder=n,this.sanitizer=o,this.jwtService=a,this.hopitalService=l,this.faSearch=g.wn1,this.canShowMap=!1,this.searchUrl=" ",this.addressesList=[],this.searchHopitalForm=this.formBuilder.group({searchName:["",r.kI.required],ville:[]})}ngOnInit(){}rechercher(){let t=this.searchHopitalForm.get("searchName").value,n=this.searchHopitalForm.get("ville").value;null==n&&(n=""),""!=t&&(this.canShowMap=!0,this.searchUrl=`https://nominatim.openstreetmap.org/search?street=${t}&city=${n}`,this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.searchUrl),this.getPlace(t,n))}getPlace(t,n){this.addressService.getPlaceByName(t,n).subscribe(o=>{this.addressesList=o})}setAddresse(t){let n=this.jwtService.getUserId();this.hopitalService.getHopitalByUserId(n).subscribe(o=>{this.hopitalService.setHopitalAddresse(o.hopital.id,t).subscribe(a=>{null==a.exceptionMessage?_.H.successMessage("Addresse d\xe9finie"):S.q.errorMessage(a.exceptionMessage)})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(z.O),e.Y36(r.qu),e.Y36(F.H7),e.Y36(u.o),e.Y36(m.x))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-hopital-details"]],decls:19,vars:4,consts:[[1,"container"],[1,"searchFormContainer"],[1,"icon",3,"icon"],[1,"searchForm",3,"formGroup"],["appearance","fill"],["type","text","placeholder","Ville","matInput","","formControlName","ville"],["type","text","placeholder","recherche","matInput","","formControlName","searchName"],["mat-button","",1,"primary","rechercher",3,"click"],["class","body",4,"ngIf"],["class","hint",4,"ngIf"],[1,"body"],["frameborder","0",1,"map",3,"src"],[1,"searchResults"],["class","addressLine",4,"ngFor","ngForOf"],[1,"addressLine"],[1,"typeData"],[1,"key"],[1,"value"],["mat-button","",1,"primary","selectionner",3,"click"],[1,"hint"]],template:function(t,n){1&t&&(e._UZ(0,"app-hopital-menu"),e.TgZ(1,"div",0)(2,"div",1)(3,"h3"),e._UZ(4,"fa-icon",2),e._uU(5," Rechechez votre institution "),e.qZA(),e.TgZ(6,"form",3)(7,"mat-form-field",4)(8,"mat-label"),e._uU(9,"Ville"),e.qZA(),e._UZ(10,"input",5),e.qZA(),e.TgZ(11,"mat-form-field",4)(12,"mat-label"),e._uU(13,"Recherche"),e.qZA(),e._UZ(14,"input",6),e.qZA(),e.TgZ(15,"button",7),e.NdJ("click",function(){return n.rechercher()}),e._uU(16,"Rechercher"),e.qZA()()(),e.YNc(17,$,6,2,"div",8),e.YNc(18,K,2,0,"div",9),e.qZA()),2&t&&(e.xp6(4),e.Q6J("icon",n.faSearch),e.xp6(2),e.Q6J("formGroup",n.searchHopitalForm),e.xp6(11),e.Q6J("ngIf",n.canShowMap),e.xp6(1),e.Q6J("ngIf",!n.canShowMap))},dependencies:[p.sg,p.O5,T.BN,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,C.lW,h.KE,h.hX,y.Nt,f],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:95vw;margin:auto}.body[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.searchResults[_ngcontent-%COMP%]{margin:1em}.addressLine[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;padding:.5em}.selectionner[_ngcontent-%COMP%]{margin-top:.5em}.addressLine[_ngcontent-%COMP%] + .addressLine[_ngcontent-%COMP%]{margin-top:1em}.addressLine[_ngcontent-%COMP%]:hover{background-color:#cff4d2;border-radius:.3em}.hint[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100vw;font-size:2em;height:60vh}.map[_ngcontent-%COMP%]{width:50vw;height:100vh}.searchFormContainer[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:#d9e7f7;margin:1em;border-radius:.3em;padding-top:1em}.searchForm[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-column-gap:1em;justify-content:center;align-items:center}h3[_ngcontent-%COMP%]{margin:0 1em;padding:0}.typeData[_ngcontent-%COMP%]{display:flex;flex-direction:row}.value[_ngcontent-%COMP%]{margin-left:1em}.rechercher[_ngcontent-%COMP%]{border-radius:.3em}"]}),i})();function V(i,s){if(1&i&&(e.TgZ(0,"div",1)(1,"div",2),e._uU(2),e.qZA(),e._UZ(3,"iframe",3),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.hij(" ",t.hopital.addresse.display_name," "),e.xp6(1),e.Q6J("src",t.mapLink,e.uOi)}}let W=(()=>{class i{constructor(t,n,o){this.hopitalService=t,this.jwtService=n,this.sanitizer=o,this.mapLink=null,this.getHopital()}ngOnInit(){}getHopital(){let t=this.jwtService.getUserId();this.hopitalService.getHopitalByUserId(t).subscribe(n=>{this.hopital=n.hopital,this.mapLink=this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${n.hopital.addresse.lat},${n.hopital.addresse.lon}&hl=fr&z=14&amp&output=embed`)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.x),e.Y36(u.o),e.Y36(F.H7))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-confirmed-details"]],decls:2,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"addresse"],[1,"carte",3,"src"]],template:function(t,n){1&t&&(e._UZ(0,"app-hopital-menu"),e.YNc(1,V,4,2,"div",0)),2&t&&(e.xp6(1),e.Q6J("ngIf",n.hopital))},dependencies:[p.O5,f],styles:[".container[_ngcontent-%COMP%]{max-width:80vw;margin:auto}.addresse[_ngcontent-%COMP%]{background-color:#cff4d2;border:1px solid #359d9e;border-radius:.3em;padding:2em;margin:1em}.carte[_ngcontent-%COMP%]{width:100%;height:50vh}"]}),i})();var ee=c(8372),te=c(1884),ie=c(529);let ne=(()=>{class i{constructor(t){this.httpClient=t}addLit(t,n,o){return this.httpClient.post(v.F+"addLit",{hopitalID:n,specialiteID:t,nombre:o,libre:!0},{withCredentials:!0})}getLitBySpecAndHopital(t,n){return this.httpClient.post(v.F+"getLitsBySpecAndHopital",{specID:n,hopitalID:t},{withCredentials:!0})}countLitByHopital(t){return this.httpClient.post(v.F+"countLitByHopital",{hopitaID:t},{withCredentials:!0})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(ie.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var A=c(3805);function oe(i,s){1&i&&(e.TgZ(0,"div",13),e._UZ(1,"mat-progress-spinner",14),e.qZA())}function se(i,s){if(1&i&&(e.TgZ(0,"mat-option",24),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.Q6J("value",t.name),e.xp6(1),e.hij(" ",t.name," ")}}function ae(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",15)(1,"div",16)(2,"h2"),e._uU(3,"Ajouter un nouveau lit"),e.qZA(),e.TgZ(4,"div",17),e._UZ(5,"img",18),e.qZA(),e.TgZ(6,"form",19)(7,"mat-form-field",6)(8,"mat-label"),e._uU(9,"Sp\xe9cialit\xe9"),e.qZA(),e._UZ(10,"input",20),e.TgZ(11,"mat-autocomplete",null,21),e.YNc(13,se,2,2,"mat-option",9),e.qZA()(),e.TgZ(14,"mat-form-field",6)(15,"mat-label"),e._uU(16,"Nombre de lits"),e.qZA(),e._UZ(17,"input",22),e.qZA(),e.TgZ(18,"button",23),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.addLit())}),e._uU(19,"Ajouter"),e.qZA()()()()}if(2&i){const t=e.MAs(12),n=e.oxw();e.xp6(6),e.Q6J("formGroup",n.addBedForm),e.xp6(4),e.Q6J("matAutocomplete",t),e.xp6(3),e.Q6J("ngForOf",n.specOptions)}}function ce(i,s){if(1&i&&(e.TgZ(0,"mat-option",24),e._uU(1),e.qZA()),2&i){const t=s.$implicit;e.Q6J("value",t.name),e.xp6(1),e.hij(" ",t.name," ")}}function re(i,s){1&i&&(e.TgZ(0,"div",34),e._uU(1," libre"),e.qZA())}function le(i,s){1&i&&(e.TgZ(0,"div",35),e._uU(1,"reserv\xe9"),e.qZA())}function pe(i,s){1&i&&(e.TgZ(0,"div",36),e._uU(1,"occup\xe9"),e.qZA())}function de(i,s){if(1&i&&(e.TgZ(0,"div",29)(1,"div",30),e._uU(2),e.qZA(),e.TgZ(3,"div",30),e._uU(4),e.qZA(),e.TgZ(5,"div",30),e._uU(6,"Etat: "),e.YNc(7,re,2,0,"div",31),e.YNc(8,le,2,0,"div",32),e.YNc(9,pe,2,0,"div",33),e.qZA()()),2&i){const t=s.$implicit;e.xp6(2),e.hij("Lit N\xb0 ",t.litId,""),e.xp6(2),e.Oqu(t.specialite.name),e.xp6(3),e.Q6J("ngIf",t.libre&&!t.reserved),e.xp6(1),e.Q6J("ngIf",t.reserved),e.xp6(1),e.Q6J("ngIf",!t.libre)}}function me(i,s){if(1&i&&(e.TgZ(0,"div",25)(1,"div",26),e._uU(2),e.qZA(),e.TgZ(3,"div",27),e._uU(4),e.qZA(),e.YNc(5,de,10,5,"div",28),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.hij(" Nombre de lits : ",t.lits.length," "),e.xp6(2),e.hij("Nombre de lits disponibles: ",t.litsLibreBySpecCount,""),e.xp6(1),e.Q6J("ngForOf",t.lits)}}function ue(i,s){1&i&&(e.TgZ(0,"div",37),e._uU(1," S\xe9lectionnez une sp\xe9ciait\xe9 pour afficher les lits "),e.qZA())}const ge=[{path:"",component:D},{path:"addSpecToHopital",component:G},{path:"setDetails",component:X},{path:"viewDetails",component:W},{path:"lits",component:(()=>{class i{constructor(t,n,o,a,l){this.specService=t,this.formBuider=n,this.jwtHandler=o,this.hopitalService=a,this.litService=l,this.isLoading=!1,this.isBedLoading=!1,this.litsLibreBySpecCount=0,this.totalLitsByHopital=0,this.stompClient=null,this.lits=[],this.allSpecialites=[],this.specOptions=[],this.addBedForm=this.formBuider.group({specialite:["",r.kI.required],nombre:["",r.kI.required]}),this.getBedForm=this.formBuider.group({spec:["",r.kI.required]}),this.addBedForm.get("specialite").valueChanges.subscribe(d=>{this.specOptions=this.allSpecialites.filter(b=>b.name.includes(d))}),this.getBedForm.get("spec").valueChanges.pipe((0,ee.b)(300),(0,te.x)()).subscribe(d=>{this.specOptions=this.allSpecialites.filter(b=>b.name.includes(d))}),this.getSpec()}ngOnDestroy(){this.disconnect()}ngOnInit(){this.connectToSocket()}getSpec(){this.isLoading=!0,this.specService.getSpecialites().subscribe(t=>{this.allSpecialites=t.specialites,this.specOptions=this.allSpecialites,this.isLoading=!1})}specSelectionChange(t){let n=t;this.addBedForm.get("specialite").setValue(n)}bedSpecSelectionChange(t){let n=t;this.getBedForm.get("spec").setValue(n),this.getListBySpecAndHopital()}addLit(){let t=this.addBedForm.get("specialite").value,n=this.getSpecIDFromName(t),o=this.addBedForm.get("nombre").value,a=this.jwtHandler.getUserId();this.hopitalService.getHopitalByUserId(a).subscribe(l=>{this.litService.addLit(n,l.hopital.id,o).subscribe(d=>{null==d.exceptionMessage&&_.H.successMessage("Lits ajout\xe9s"),null!=d.exceptionMessage&&null!=d.newAuthenticationToken&&S.q.errorMessage(l.exceptionMessage)})})}getListBySpecAndHopital(){this.isBedLoading=!0;let t=this.jwtHandler.getUserId(),n=this.getBedForm.get("spec").value,o=this.getSpecIDFromName(n);this.hopitalService.getHopitalByUserId(t).subscribe(a=>{this.litService.getLitBySpecAndHopital(a.hopital.id,o).subscribe(l=>{this.lits=l.lits,console.log(this.lits),this.countDisponible()})})}countDisponible(){let t=this.lits.filter(n=>n.libre);this.litsLibreBySpecCount=t.length}getSpecIDFromName(t){return console.log(t),this.allSpecialites.find(o=>o.name===t).id}connectToSocket(){const t=new M(v.Y);this.stompClient=U.over(t),this.stompClient.connect({},()=>{this.stompClient.subscribe("/topic/updateListeList",()=>{this.getListBySpecAndHopital()})})}disconnect(){this.stompClient.disconnect()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(Z.R),e.Y36(r.qu),e.Y36(u.o),e.Y36(m.x),e.Y36(ne))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-lits"]],decls:20,vars:7,consts:[[1,"container"],["class","loading",4,"ngIf"],["class","left",4,"ngIf"],[1,"right"],[1,"getListFormContainer"],[1,"getBedForm",3,"formGroup"],["appearance","fill"],["type","text","matInput","","formControlName","spec",3,"matAutocomplete"],["bedListSpecAutoComplete","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-button","",1,"primary","ok",3,"click"],["class","numbers",4,"ngIf"],["class","hint",4,"ngIf"],[1,"loading"],["diameter","50"],[1,"left"],[1,"addBedFormContainer"],[1,"imgContainer"],["src","https://i.postimg.cc/kGDfktMX/addBed.png","alt",""],[1,"addBedForm",3,"formGroup"],["type","text","matInput","","formControlName","specialite",3,"matAutocomplete"],["auto","matAutocomplete"],["type","number","min","1","placeholder","Nombre","matInput","","formControlName","nombre"],["mat-button","",1,"ajouter","primary",3,"click"],[3,"value"],[1,"numbers"],[1,"total"],[1,"disponibles"],["class","litLine",4,"ngFor","ngForOf"],[1,"litLine"],[1,"value"],["class","libre",4,"ngIf"],["class","reserverd",4,"ngIf"],["class","occupied",4,"ngIf"],[1,"libre"],[1,"reserverd"],[1,"occupied"],[1,"hint"]],template:function(t,n){if(1&t&&(e._UZ(0,"app-hopital-menu"),e.TgZ(1,"div",0),e.YNc(2,oe,2,0,"div",1),e.YNc(3,ae,20,3,"div",2),e.TgZ(4,"div",3)(5,"div",4)(6,"h2"),e._uU(7,"Afficher les lits par sp\xe9cialit\xe9"),e.qZA(),e.TgZ(8,"form",5)(9,"mat-form-field",6)(10,"mat-label"),e._uU(11,"Sp\xe9cialit\xe9"),e.qZA(),e._UZ(12,"input",7),e.TgZ(13,"mat-autocomplete",null,8),e.YNc(15,ce,2,2,"mat-option",9),e.qZA()(),e.TgZ(16,"button",10),e.NdJ("click",function(){return n.getListBySpecAndHopital()}),e._uU(17,"Ok"),e.qZA()()(),e.YNc(18,me,6,3,"div",11),e.YNc(19,ue,2,0,"div",12),e.qZA()()),2&t){const o=e.MAs(14);e.xp6(2),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("ngIf",!n.isLoading),e.xp6(5),e.Q6J("formGroup",n.getBedForm),e.xp6(4),e.Q6J("matAutocomplete",o),e.xp6(3),e.Q6J("ngForOf",n.specOptions),e.xp6(3),e.Q6J("ngIf",n.getBedForm.valid),e.xp6(1),e.Q6J("ngIf",!n.getBedForm.valid)}},dependencies:[p.sg,p.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.qQ,r.sg,r.u,C.lW,H.Ou,h.KE,h.hX,y.Nt,L.ey,A.XC,A.ZL,f],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:1em;margin:1em}.left[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.addBedFormContainer[_ngcontent-%COMP%]{border:1px solid #359d9e;display:flex;flex-direction:column;justify-content:center;border-radius:.3em;padding:1em}.imgContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.addBedForm[_ngcontent-%COMP%]{display:flex;flex-direction:column}img[_ngcontent-%COMP%]{width:60%}.getListFormContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column}.getBedForm[_ngcontent-%COMP%]{display:grid;grid-template-columns:6fr 1fr;justify-content:center;align-items:center;grid-column-gap:1em}.litLine[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:1em 0}.value[_ngcontent-%COMP%]{display:flex;flex-direction:row}.value[_ngcontent-%COMP%] + .value[_ngcontent-%COMP%]{margin-left:.5em}"]}),i})()}];let he=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,T.uH,r.UX,C.ot,H.Cq,y.c,I.LD,A.Bb,x.Bz.forChild(ge)]}),i})()}}]);