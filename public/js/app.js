window.addEventListener('load', function(){

	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};

	window.grafik_cizc1 = function(hbo, po, ko, tee) {

		var chartp1 = c3.generate({
				bindto: '#chartc1',
			size: {
		        height: 400,
		        width: 1300
		    },
		    data: {
	        columns: [
	            ['Hazır Bulunma Oranı', ...hbo],
	            ['Performans Oranı', ...po],
	            ['Kalite Oranı', ...ko],
	            ['Toplam Ekipman Etkinliği', ...tee],
	        ]},
	        grid: {
		        y: {
		            lines: [{value:0.90, class: 'grid90', text:"HBO"}, {value:0.95, class: 'grid95', text:"PO"}, 
		            {value:0.99, class: 'grid99', text:"KO"}, {value: 0.85, class: 'grid85', text: 'TEE' }]
		            
		           
		        }
		        
		    }
		    
		});
	}

		window.grafik_cizp1 = function(hbo) {

			var toplam = 0;
			for (var i = 0; i < hbo.length; i++) {
				toplam += parseFloat(hbo[i]);
			}

			var ortalama = toplam / hbo.length;

			var chartp1 = c3.generate({
				bindto: '#chartp1',

			    data: {
			        columns: [
			            ['Hazır Bulunma', ortalama * 100]
			        ],
			        type: 'gauge',
			        onclick: function (d, i) { console.log("onclick", d, i); },
			        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
			        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			    },
			    gauge: {
			//        label: {
			//            format: function(value, ratio) {
			//                return value;
			//            },
			//            show: false // to turn off the min/max labels.
			//        },
			//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
			//    max: 100, // 100 is default
			//    units: ' %',
			//    width: 39 // for adjusting arc thickness
			    },

			    color: {
			        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
			        threshold: {
			//            unit: 'value', // percentage is default
			//            max: 200, // 100 is default
			            values: [30, 60, 90, 100]
			        }
			    },
			    size: {
			        height: 180
			    }

			});
		}

		window.grafik_cizp2 = function(po) {

			var toplam = 0;
			for (var i = 0; i < po.length; i++) {
				toplam += parseFloat(po[i]);
			}

			var ortalama = toplam / po.length;

			var charp2 = c3.generate({
				bindto: '#chartp2',

			    data: {
			        columns: [
			            ['Performans', ortalama * 100]
			        ],
			        type: 'gauge',
			        onclick: function (d, i) { console.log("onclick", d, i); },
			        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
			        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			    },
			    gauge: {
			//        label: {
			//            format: function(value, ratio) {
			//                return value;
			//            },
			//            show: false // to turn off the min/max labels.
			//        },
			//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
			//    max: 100, // 100 is default
			//    units: ' %',
			//    width: 39 // for adjusting arc thickness
			    },
			    color: {
			        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
			        threshold: {
			//            unit: 'value', // percentage is default
			//            max: 200, // 100 is default
			            values: [30, 60, 90, 100]
			        }
			    },
			    size: {
			        height: 180
			    }
			});
		}
	
	window.grafik_cizp3 = function(ko) {

			var toplam = 0;
			for (var i = 0; i < ko.length; i++) {
				toplam += parseFloat(ko[i]);
			}

			var ortalama = toplam / ko.length;

			var chartp3 = c3.generate({
				bindto: '#chartp3',

			    data: {
			        columns: [
			            ['Kalite', ortalama * 100]
			        ],
			        type: 'gauge',
			        onclick: function (d, i) { console.log("onclick", d, i); },
			        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
			        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			    },
			    gauge: {
			//        label: {
			//            format: function(value, ratio) {
			//                return value;
			//            },
			//            show: false // to turn off the min/max labels.
			//        },
			//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
			//    max: 100, // 100 is default
			//    units: ' %',
			//    width: 39 // for adjusting arc thickness
			    },
			    color: {
			        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
			        threshold: {
			//            unit: 'value', // percentage is default
			//            max: 200, // 100 is default
			            values: [30, 60, 90, 100]
			        }
			    },
			    size: {
			        height: 180
			    }
			});
		}

		window.grafik_cizp4 = function(tee) {

			var toplam = 0;
			for (var i = 0; i < tee.length; i++) {
				toplam += parseFloat(tee[i]);
			}

			var ortalama = toplam / tee.length;


			var charp4 = c3.generate({
				bindto: '#chartp4',

			    data: {
			        columns: [
			            ['TEE', ortalama * 100]
			        ],
			        type: 'gauge',
			        onclick: function (d, i) { console.log("onclick", d, i); },
			        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
			        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			    },
			    gauge: {
			//        label: {
			//            format: function(value, ratio) {
			//                return value;
			//            },
			//            show: false // to turn off the min/max labels.
			//        },
			//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
			//    max: 100, // 100 is default
			//    units: ' %',
			//    width: 39 // for adjusting arc thickness
			    },
			    color: {
			        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
			        threshold: {
			//            unit: 'value', // percentage is default
			//            max: 200, // 100 is default
			            values: [30, 60, 90, 100]
			        }
			    },
			    size: {
			        height: 180
			    }
			});
		}

	/* Yardımcı Fonksiyonlar */
	/* Format Fonksiyonu Tarih Biçimlendirmeleri İçin */

	var format = function date2str(x, y) {
	    var z = {
	        M: x.getMonth() + 1,
	        d: x.getDate(),
	        h: x.getHours(),
	        m: x.getMinutes(),
	        s: x.getSeconds()
	    }

	    y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
	        return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
	    });

	    return y.replace(/(y+)/g, function(v) {
	        return x.getFullYear().toString().slice(-v.length)
	    });
	}

	/* Yardımcı Fonksiyonlar */


	Vue.config.warnHandler = function (msg, vm, trace) {
	  // `trace` is the component hierarchy trace
	}

	window.vue = new Vue({
		el: '#app',
		data: () => ({
			tab: 'girdiler',
			sonuc_diyalog: false,
			panel1: true,
			panel2: false,	
			tarih_modal: false,
			tarih_Vsi: null,
			ariza_kaynakli_durus_suresi: null,
			uretim_miktari: null,
			kusurlu_urun_miktari: null,
			ideal_devir_zamani: null,
			secim: 'sn',
			tempo_sureleri: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,115,120,125,130,135,140,145,150],
			isin_tanimi: null,
			sureler_array: [],
			tempolar: Array(10).fill(null),
			sureler: Array(10).fill(null),
			info: {
				birim_adi:null,
				haftada_kac_gun: null,
				gunde_kac_vardiya: null,
				vardiya_kac_saat: null,
				vardiyada_kac_dakika_mola: null,
				ekipmanda_kac_cesit_urun_uretiliyor:null,
			},
			kullanici_adi: null,
			kullanici_sifre: null,
			tabloverileri: [],
			ekip_uyeleri: [
				{ img: './1.jpg', isim: 'M.Ömer Bulakçıbaşı' },
				{ img: './2.jpg', isim: 'Bayram Bura' },
				{ img: './3.jpg', isim: 'Fatih keskinoğlu' }
			],
			items: [
				{ title: 'Hakkında', icon: 'apps' },
				{ title: 'Ekip', icon: 'assignment_ind' },
				{ title: 'Yardım', icon: 'help' },
			],
			pay_suresi: 0.05,
			sureler_diyalog: false,
			giris_yapildi: true,
			giris_diyalog:true,
			hakkinda_diyalog: false,
			yardim_diyalog: false,
			ekip_diyalogg: false,
			kayit_diyalog: false,
			hboArr: [],
			poArr: [],
			koArr: [],
			teeArr: [],
			kronometretimer: null,
			startTime: 0,
			nowTime: 0,
			diffTime: 0,
			endTime: 0,
			isStarted: false,
			DinlenmePayiHesapla:false,
			times: [],
			KisiselIhtiyaclar:null,
			BedenselYorgunluk:null,
			DusunselYorgunluk:null,
			CalismaPozisyonu:null,
			Gurultu:null,
			GozYorgunlugu:null,
			CevreKosullari:null,
			GecikmePaylari:null,
			KisiselIhtiyaclarArray:[
				{title: "%2", value: 0.02},
				{title: "%3", value: 0.03},
			],
			BedenselYorgunlukArray:[
				{title:"Çok hafif (%2)",value:0.02},
				{title:"Hafif ve ustalık isteyen (%4)",value:0.04},
				{title:"Orta ağırlıkta ve ustalık isteyen (%8)",value:0.08},
				{title:"Ağır (%16)",value:0.16},
				{title:"Çok ağır (%2)",value:0.02},
			],
			DusunselYorgunlukArray:[
				{title:"%30-%40 yoğunluk (%1)",value:0.01},
				{title:"%41-%50 yoğunluk (%2)",value:0.02},
				{title:"%51-%75 yoğunluk (%4)",value:0.04},
				{title:"%76 + yoğunluk (%8)",value:0.08},
			],
			CalismaPozisyonuArray:[
				{title:"Oturma (%1)",value:0.01},
				{title:"Ayakta (%2)",value:0.02},
				{title:"Eğilme ve uzanma (%4)",value:0.04},
				{title:"Yürüme (%10)",value:0.1},
			],
			GurultuArray:[
				{title:"Normal sesle konuşma (%0)",value:0.00},
				{title:"Konuşmak için sesi yükseltmek (%1)",value:0.01},
				{title:"Bağırarak konuşma (%2)",value:0.02},
				{title:"Gürültünün konuşmayı engellemesi (%4)",value:0.04},
				{title:"Düzensiz ve sürekli gürültü (%1)",value:0.01},
			],
			GozYorgunluguArray:[
				{title:"Çıplak gözle yapılan işler (%0)",value:0.00},
				{title:"Gözlük vb. kullanımı (%4)",value:0.04},
				{title:"Mikroskop vb. kullanımı (%6)",value:0.06},
			],
			CevreKosullariArray:[
				{title:"Büro vb. (%0)",value:0.00},
				{title:"Duman, yağ kokusu vb. faktörler (%2)",value:0.02},
				{title:"Aşırı rahatsızlık veren faktörler (%6)",value:0.06},
				{title:"Aşırı sıcak ve soğuk yerler (%6)",value:0.06},
				{title:"Zararlı kimyasal madde bulunan yerler (%6)",value:0.06},
			],
			GecikmePaylariArray:[
				{title:"Dinlenme aralarının verilmesi (%0)",value:0.00},
				{title:"Arıza (%1-%5)",value:0.03},
				{title:"Hazırlık (%0)",value:0.00},
			],
			toplamDinlenmePayi: null,
			secimKontrol:[
				value => (value !== null) || "Zorunlu alan"
			],
			dinlenmePaylariDoldurAlert: false,
			dinlenmePayiKontrol: false,
			team_list:
			[
				{
					img: './img/muhammed_omer_bulakcibasi.jpg',
					name: 'Muhammed Ömer BULAKÇIBAŞI',
					university: 'Ondokuz Mayıs Üniversitesi',
					department: 'Endüstri Mühendisliği',
					project_work: 'Programlama',
					email: '***.gmail.com',
				},
				{
					img: './img/bayram_bura.jpg',
					name: 'Bayram BURA',
					university: 'Ondokuz Mayıs Üniversitesi',
					department: 'Endüstri Mühendisliği',
					project_work: 'Tasarım',
					email: '***.gmail.com',
				},
				{
					img: './img/fatih_keskin.jpg',
					name: 'Fatih KESKİNOĞLU',
					university: 'Ondokuz Mayıs Üniversitesi',
					department: 'Endüstri Mühendisliği',
					project_work: 'Uygulama Test ve Analiz',
					email: '***.gmail.com',
				},
				{
					img: './img/hakan_binici.jpg',
					name: 'Hakan BİNİCİ',
					university: 'Ondokuz Mayıs Üniversitesi',
					department: 'Endüstri Mühendisliği',
					project_work: 'Programlama',
					email: '***.gmail.com',
				},
				
			],
		mentor:
			{
				img: './img/sermin_elevli.jpg',
				name: 'Prof. Dr. Sermin ELEVLİ',
				university: 'Ondokuz Mayıs Üniversitesi',
				department: 'Endüstri Mühendisliği',
				project_work: 'Tez Danışmanı',
				email: '***.gmail.com',
			},
		}),
		watch: {
		    akds_modal (val) {
		      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'));
		    }
	  },
	  filters: {
	    // ゼロ埋めフィルタ 引数に桁数を入力する
	    // ※ String.prototype.padStart() は IEじゃ使えない
	    zeroPad: function(value, num){
	      var num = typeof num !== 'undefined' ? num : 2;
	      return value.toString().padStart(num,"0");
	    }
	  },

	  beforeDestroy () {
	       clearInterval(this.kronometretimer);
	  },

	  created() {
	  	//this.sureler = [1853, 1742, 193, 1814, 2024, 2033, 1712, 2111, 21, 21];
	  	//this.tempolar = [90, 90, 90, 90, 80, 80, 90, 80, 80, 80];
	  	//this.kronometreBaslat();
	  	// this.testVerisiGir();		  	
	  },

	  computed: {
	  	toplamDinlenmePaylari() {
	  		var toplamlar = 	parseFloat(this.KisiselIhtiyaclar )+
								parseFloat(this.BedenselYorgunluk )+
								parseFloat(this.DusunselYorgunluk )+
								parseFloat(this.CalismaPozisyonu )+
								parseFloat(this.Gurultu) +
								parseFloat(this.GozYorgunlugu )+
								parseFloat(this.CevreKosullari) +
								parseFloat(this.GecikmePaylari);

	  		return parseFloat(toplamlar).toFixed(2)*100;
	  	},
	  	pay() {
	  		return this.pay_suresi;
	  	},
	  	gydBul() {
	  		return this.gydHesapla(10, this.sureler);
	  	},
	  	normalZamanBul() {
	  		return this.normalZamanHesapla(this.tempolar, this.sureler);
	  	},
	  	standartZamanBul() {
	  		return this.standartZamanHesapla(this.normalZamanBul, this.pay);
	  	},
	  	dakika() {
	  		var diffTime = this.nowTime - this.startTime;

	  		if(diffTime < 0){ diffTime = 0;}


	  		return Math.floor(diffTime / (60 * 1000) );
	  	},
	  	saniye() {
	  		var diffTime = this.nowTime - this.startTime;

	  		if(diffTime < 0){ diffTime = 0;}

			diffTime = diffTime % (60 * 1000);
			return Math.floor( diffTime / 1000 );
		},
	},
	  
		methods: {

			kayitOl() {
				return this.kayit_diyalog = true;
			},

			ekipDiyalogKapat() {
				return this.ekip_diyalogg = false;
			},

			pdfIndir() {

				var doc = new jsPDF({
			orientation: 'landscape',
			unit: 'pt',
			format: 'a3'
		});

		Promise.all([
			new Promise(function(resolve) {
				html2canvas(document.getElementById('grafikler'), {
					onrendered: function(canvas) {
							resolve(canvas.toDataURL('image/png'));
					},
				});
			})
		]).then(function (table_png) {
			doc.addImage(table_png[0], 'JPEG', 10, 10);
			doc.save('teematikrapor.pdf');
		});

			},

			dinlenmePaylariKaydet() {
				if(
					this.KisiselIhtiyaclar !== null &&
					this.BedenselYorgunluk !== null &&
					this.DusunselYorgunluk !== null &&
					this.CalismaPozisyonu !== null &&
					this.Gurultu !== null &&
					this.GozYorgunlugu !== null &&
					this.CevreKosullari !== null  &&
					this.GecikmePaylar !== null
				) {
					var toplamlar = parseFloat(this.KisiselIhtiyaclar )+
									parseFloat(this.BedenselYorgunluk )+
									parseFloat(this.DusunselYorgunluk )+
									parseFloat(this.CalismaPozisyonu )+
									parseFloat(this.Gurultu) +
									parseFloat(this.GozYorgunlugu )+
									parseFloat(this.CevreKosullari) +
									parseFloat(this.GecikmePaylari);

					this.toplamDinlenmePayi = parseFloat(toplamlar).toFixed(2);
					this.DinlenmePayiHesapla = false;
				} else {
					this.dinlenmePaylariDoldurAlert = true;
				}
			},

			sutunEkle(x) {
				if(x == true) {
					this.sureler.push(null);
				}

				this.tempolar.push(null);
			},

			kronometreBaslat() {
				if(this.isStarted == false){
					this.startTime = new Date().getTime();
				}

				var self = this;

				this.kronometretimer = setInterval(function() {
					self.nowTime = new Date().getTime();
				}, 300);

				this.isStarted = true;

			},

			kronometreTur() {
				this.diffTime = this.nowTime - this.startTime;

				var diffTime = Math.round(this.diffTime / 1000);
				this.times.push(diffTime);

				this.sureler = [...this.times];

				if(this.sureler.length >= this.tempolar.length){
					this.sutunEkle(true);
				}

				this.startTime = new Date().getTime();
				this.diffTime = 0;
			},

			kronometreDurdur() {
				clearInterval(this.kronometretimer);
			},

			kronometreTemizle() {
				this.kronometreDurdur();
				this.diffTime = 0;
				this.startTime = 0;
				this.nowTime = 0;
				this.times = [];
				this.isStarted = false;
			},
			 
			grafikGoster() {
				grafik_cizc1(this.hboArr, this.poArr, this.koArr, this.teeArr);
				grafik_cizp1(this.hboArr);
				grafik_cizp2(this.poArr);
				grafik_cizp3(this.koArr);
				grafik_cizp4(this.teeArr);

				this.sonuc_diyalog = true;
			},

			sonrakiAdimButonu1() {
				this.panel1 = false;
				this.panel2 = true;	
			},

			sonrakiAdimButonu2() {
				this.panel1 = false;
				this.panel2 = false;	
				this.tab = 'sonuc';

				/**grafik_cizc1();
				grafik_cizp1();
				grafik_cizp2();
				grafik_cizp3();
				grafik_cizp4();

				this.sonuc_diyalog = true;**/

			},

			hazir_bulunma_orani_hesap(planlanmis_uretim_suresi, ariza_kaynakli_durus_suresi) {
				var a = planlanmis_uretim_suresi - ariza_kaynakli_durus_suresi;
				var b = planlanmis_uretim_suresi;

				return a / b;
			},

			performans_orani_hesap(calisma_suresi, uretim_miktari, ideal_devir_zamani) {
				var a = uretim_miktari * ideal_devir_zamani;
				var b = calisma_suresi * 60;

				/*
					var a = uretim_miktari;
					var b = ideal_uretim_orani * calisma_suresi;
				*/

				return a / b;
			},

			kalite_orani_hesap(uretim_miktari, kusurlu_uretim_miktari) {

				var a = uretim_miktari - kusurlu_uretim_miktari;
				var b = uretim_miktari;

				return a / b;
			},

			toplam_ekipman_etkinligi_hesap(hazir_bulunma_orani, performans_orani, kalite_orani){
				return hazir_bulunma_orani * performans_orani * kalite_orani;
			},

			gydHesapla(n, X){
				var N = null;

				var toplamx = 0;
				var toplam_xkare = 0;
				var toplamx_kare = 0;

				for (var i = 0; i < X.length; i++) {
					toplamx = toplamx + parseInt(X[i]);
					toplam_xkare = toplam_xkare + Math.pow(X[i], 2);
				}

				var toplamx_kare = Math.pow(toplamx, 2);

				var a = 40 * (Math.pow(n * toplam_xkare - toplamx_kare, 0.5));
				var b = toplamx;
				N = Math.pow(a / b, 2);

				return parseInt(N);

			},

			normalZamanHesapla(T, S){
				var NZ = null;

				var T_toplam = 0;
				var S_toplam = 0;

				var n = T.length;

				for (var i = 0; i < n; i++) {
					T_toplam = T_toplam + parseInt(T[i]);
					S_toplam = S_toplam + parseInt(S[i]);
				}

				T_toplam = T_toplam * 0.01;

				NZ = parseFloat(T_toplam / n) * parseFloat(S_toplam / n);
				this.nz = NZ;

				return parseFloat(NZ).toFixed(2);
			},

			standartZamanHesapla(){
				var SZ = null;

				var D = this.toplamDinlenmePayi;
				var NZ = this.nz;
				
				SZ = parseFloat(NZ * D) + parseFloat(NZ);

				return parseFloat(SZ).toFixed(2);
			},

			tabloHesaplama() {
				/*al_uretim_orani,
				tabloverileri
					akds: this.ariza_kaynakli_durus_suresi,
					iuo: this.ide
					um: this.uretim_miktari,
					kum: this.kusurlu_urun_miktari,
					idz: this.ideal_devir_zamani,
				*/

				var veriler = this.tabloverileri;

				for (var i = 0; i < veriler.length; i++) {
					var veri = veriler[i];

					var hbo = this.hazir_bulunma_orani_hesap(
						parseInt(this.info.vardiya_kac_saat * 60 - this.info.vardiyada_kac_dakika_mola),
						parseInt(veri.akds)
					);

					var po = this.performans_orani_hesap(
						parseInt((this.info.vardiya_kac_saat * 60 - this.info.vardiyada_kac_dakika_mola) - veri.akds),
						parseInt(veri.um),
						parseInt(veri.idz)
					);

					var ko = this.kalite_orani_hesap(
						parseInt(veri.um), 
						parseInt(veri.kum)
					);

					var tee = this.toplam_ekipman_etkinligi_hesap(hbo, po, ko);

					hbo = this.ondaliklisayikisalt(hbo, 3);
					po  = this.ondaliklisayikisalt(po, 3);
					ko  = this.ondaliklisayikisalt(ko, 3);
					tee = this.ondaliklisayikisalt(tee, 3);

					this.hboArr.push(hbo);
					this.poArr.push(po);
					this.koArr.push(ko);
					this.teeArr.push(tee);

					Vue.set(this.tabloverileri[i], 'hbo', hbo);
					Vue.set(this.tabloverileri[i], 'po', po);
					Vue.set(this.tabloverileri[i], 'ko', ko);
					Vue.set(this.tabloverileri[i], 'tee', tee);

				}
			},

			ondaliklisayikisalt(sayi, basamak = 2) {
				return sayi.toFixed(basamak);
			},

			yeniVeriGirisiEkle() {

				this.sureler_array.push(
					{
						isin_tanimi: this.isin_tanimi,
						tempolar: this.tempolar,
						sureler: this.sureler,
					}
				);

				this.isin_tanimi = null;
				this.tempolar = Array(10).fill(null);
				this.sureler = Array(10).fill(null);
			},

			sureVeriSil(index){
				var silinmis_veri = this.sureler_array.splice(index, 1);
				Vue.set(this.sureler_array, silinmis_veri);
			},

			sureleriKaydet() {
				/*var sureler = this.sureler;
				var toplam = 0;
				var n = sureler.length;

				for (var i = 0; i < sureler.length; i++) {
					toplam += parseInt(sureler[i]);
				}

				console.log(toplam, sureler, n);

				ortalama = toplam / n;*/

				this.ideal_devir_zamani = this.standartZamanHesapla();
				this.sureler_diyalog = false;
			},

			tabloyaVeriEkle() {
				var yeniveri = {
					ts: this.tarih_suresi,
					akds: this.ariza_kaynakli_durus_suresi,
					um: this.uretim_miktari,
					kum: this.kusurlu_urun_miktari,
					idz: this.ideal_devir_zamani,
					/**/
					hbo: 0,
					po: 0,
					ko: 0,
					tee: 0,
					/**/
				}

				this.tabloverileri.push(yeniveri);

				this.tarih_suresi = null;
				this.ariza_kaynakli_durus_suresi = null;
				this.uretim_miktari = null;
				this.kusurlu_urun_miktari = null;
				this.ideal_devir_zamani = null;

			},

			ekipmanVeriSil(index){
				var silinmis_veri = this.tabloverileri.splice(index, 1);
				Vue.set(this.tabloverileri, silinmis_veri);
			},

			girisYap() {
				var kullanici_adi = this.kullanici_adi;
				var kullanici_sifre = this.kullanici_sifre;

				var kullanicilar = [
					{ad: 'ömer', sifre: 'belya'},
					{ad: 'deneme', sifre: 'deneme'},
					{ad: 'test', sifre: 'test'},
					{ad: 'demo', sifre: 'demo'},
				];

				for (var i = 0; i < kullanicilar.length; i++) {
					if(kullanici_adi == kullanicilar[i].ad && kullanici_sifre == kullanicilar[i].sifre){
						// alert('Tamam');
						this.giris_diyalog = false;
						this.giris_yapildi = true;
						break;
					}
				}

				if(this.giris_yapildi == false){
					alert("Hatalı Giriş!");
				}
				
			},

			cikisYap(){
				this.kullanici_adi = null;
				this.kullanici_sifre = null;
				this.giris_diyalog = true;
				this.giris_yapildi = false;
			},

			sayiUret(min, max) {
				var sayilar = [];

				for (var i = min; i < max; i++) {
					sayilar.push(i);
				}

				return sayilar;
			},

			saveDate(date) {
	      this.$refs.tarih_modal.save(date);
	    },

			openWindow(i){
				switch(i){
					case 0: 
						this.hakkinda_diyalog = true;
					break;
					case 1: 
						this.ekip_diyalogg = true;
					break;
					case 2: 
						this.yardim_diyalog = true;
					break;
					default:
						alert("bir baska menu tiklandi")
					break;
				}
			},

			/* TEST VERİLERİ İÇİN | SON VERSİYON DA SİL BURAYI*/
			testVerisiGir() {
				this.info.vardiya_kac_saat = 10;
		  	this.info.vardiyada_kac_dakika_mola = 60;

		  	var yeniveri = {
					ts: '01/01/1995',
					akds: 90,
					iuo: 0.0182,
					um: 460,
					kum: 110,
					idz: 55,
					/**/
					hbo: 0,
					po: 0,
					ko: 0,
					tee: 0,
					/**/
				}

				this.tabloverileri.push(yeniveri);
			}

			/* TEST VERİLERİ İÇİN | SON VERSİYON DA SİL BURAYI*/
		}
	});

}); 