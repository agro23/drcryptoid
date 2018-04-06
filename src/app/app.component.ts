import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Article } from './models/article.model';
import { CurrencyPipe } from '@angular/common';
import { ArticleService } from './article.service';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})

export class AppComponent {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  objectKeys = Object.keys;
  cryptos: any;
  title = 'Dr.CryptoID';
  myArticles = [];
  constructor(private router: Router, private articleService: ArticleService, private _data: DataService) {

  }

  ngOnInit() {
      this._data.getPrices()
        .subscribe(res => {
          this.cryptos = res;
          //console.log(res);
        });
    }
/* constructor (
  public id: number,
  public name: string,
  public author: string,
  public uploadDate: string,
  public articleHeader: string,
  public lede: string,
  public bodyCopy: string[],
  public link: string,
  public keywords: string[],
  public commentsIds: number[],
  public upvotes: number,
  public downvotes: number
) {} */


testArticle1 = new Article(1, "Bitcoin?", "Andy Grossberg", "1", "CRUD", "10/10/18", "Webtwo Ipsum Ngmoco Groupon Appjet Ngmoco, Bitcoin?", "Knewton appjet heroku unigo, bebo. Blekko ifttt jabber jumo heroku vuvox jibjab, fleck eskobo mozy meebo. Lijit trulia lijit dopplr napster, yoono kosmix. Chegg zimbra ning greplin etsy plugg movity tumblr, cuil jibjab yammer sococo jumo. Waze chartly ifttt, akismet. Wikia greplin balihoo zinch ifttt, stypi loopt plaxo.",

"hopify plickers oooj woopra, whrrl appjet. Bitly jajah spotify xobni dopplr zynga bitly joost, appjet geni reddit jabber joost. Imeem ngmoco cotweet groupon zlio, palantir spotify zillow. Kippt gooru spock oooooc orkut, akismet quora. Sococo plugg jabber akismet wikia, sococo handango knewton. Akismet sclipo geni plaxo koofers wufoo, imvu heroku zoho zapier. Lanyrd movity zappos gooru ifttt gsnap, wesabe skype mog spock. Lijit edmodo ifttt bitly akismet, bitly odeo. Disqus insala dopplr, heroku.<br>Reddit ning loopt twitter blekko imeem, jumo insala trulia mobly. Revver jibjab knewton sifteo mzinga, palantir meevee. tivo convore. Hulu zooomr handango kaboodle, yoono kosmix dogster sifteo, klout eskobo. Fleck sococo etsy chartly zlio wikia, babblely meebo lanyrd whrrl.<br>Heroku odeo eduvant movity revver, sifteo wesabe orkut, plickers oovoo joost. Vuvox imvu kazaa cuil yammer edmodo kno, bebo blippy dropio zoho bitly. Imvu knewton mobly twones, jaiku. Kosmix doostang shopify mog spock, zynga weebly. Jiglu zoho loopt xobni trulia, chartly heroku lijit. Zillow cloudera sclipo waze convore scribd unigo geni, squidoo jaiku disqus movity squidoo. jibjab imvu lala. Octopart tivo appjet convore zillow imeem weebly odeo, dropio glogster vimeo zillow oooooc. Zoodles empressr flickr kaboodle, groupon squidoo.<br>Greplin zoodles kazaa plaxo ning, octopart ngmoco. Zoosk udemy zimbra ngmoco trulia chartly, insala wakoopa sifteo oovoo, hulu empressr gsnap bitly. Omgpop rovio twones ebay zynga zinch, yuntaa shopify zapier. Lijit disqus hojoki groupon lanyrd, whrrl zimbra. dropio handango. Jajah klout jabber doostang yammer kiko, foodzie dopplr mozy omgpop. Qeyno zlio zinch edmodo, ideeli kippt kosmix udemy, blekko zynga. Klout gsnap hulu yuntaa meebo, handango wikia quora. voxy. Elgg quora spock empressr gooru bubbli, convore wesabe ideeli lanyrd, zooomr plugg zappos spotify.<br>Zynga dropio cotweet meevee, spock. Zlio appjet octopart bitly koofers unigo loopt, omgpop wesabe groupon omgpop. Jiglu jibjab eduvant yoono, chegg. Tumblr yuntaa squidoo trulia hojoki, unigo heekya spock. Lijit ideeli wufoo eskobo zapier twones, meevee ideeli hulu grockit, blyve kosmix lanyrd mzinga. Doostang imvu babblely heekya scribd, jabber ning meevee lijit, weebly plickers elgg. whrrl hulu. Unigo groupon orkut yuntaa dogster spotify shopify, yammer imeem heekya zinch lanyrd. Kosmix lanyrd kaboodle shopify, sclipo. Etsy spock dropio ifttt, blippy mobly. Imvu yuntaa edmodo jabber etsy unigo, kno fleck reddit zinch. Blekko prezi yammer eskobo, hipmunk.<br>", "https://www.google.com", ["bitcoin", "coinbase", "crypto"],[],100,10, "10001");

makeArticles(){
  this.myArticles = [this.testArticle1, this.testArticle1, this.testArticle1, this.testArticle1, this.testArticle1];
  console.log(this.articles[0].name);
  return this.articles;
}

}

/*
this.headline = "Webtwo Ipsum Ngmoco Groupon Appjet Ngmoco, Bitcoin?";

this.story = "Knewton appjet heroku unigo, bebo. Blekko ifttt jabber jumo heroku vuvox jibjab, fleck eskobo mozy meebo. Lijit trulia lijit dopplr napster, yoono kosmix. Chegg zimbra ning greplin etsy plugg movity tumblr, cuil jibjab yammer sococo jumo. Waze chartly ifttt, akismet. Wikia greplin balihoo zinch ifttt, stypi loopt plaxo.\nShopify plickers oooj woopra, whrrl appjet. Bitly jajah spotify xobni dopplr zynga bitly joost, appjet geni reddit jabber joost. Imeem ngmoco cotweet groupon zlio, palantir spotify zillow. Kippt gooru spock oooooc orkut, akismet quora. Sococo plugg jabber akismet wikia, sococo handango knewton. Akismet sclipo geni plaxo koofers wufoo, imvu heroku zoho zapier. Lanyrd movity zappos gooru ifttt gsnap, wesabe skype mog spock. Lijit edmodo ifttt bitly akismet, bitly odeo. Disqus insala dopplr, heroku.\nReddit ning loopt twitter blekko imeem, jumo insala trulia mobly. Revver jibjab knewton sifteo mzinga, palantir meevee. tivo convore. Hulu zooomr handango kaboodle, yoono kosmix dogster sifteo, klout eskobo. Fleck sococo etsy chartly zlio wikia, babblely meebo lanyrd whrrl.\nHeroku odeo eduvant movity revver, sifteo wesabe orkut, plickers oovoo joost. Vuvox imvu kazaa cuil yammer edmodo kno, bebo blippy dropio zoho bitly. Imvu knewton mobly twones, jaiku. Kosmix doostang shopify mog spock, zynga weebly. Jiglu zoho loopt xobni trulia, chartly heroku lijit. Zillow cloudera sclipo waze convore scribd unigo geni, squidoo jaiku disqus movity squidoo. jibjab imvu lala. Octopart tivo appjet convore zillow imeem weebly odeo, dropio glogster vimeo zillow oooooc. Zoodles empressr flickr kaboodle, groupon squidoo.\nGreplin zoodles kazaa plaxo ning, octopart ngmoco. Zoosk udemy zimbra ngmoco trulia chartly, insala wakoopa sifteo oovoo, hulu empressr gsnap bitly. Omgpop rovio twones ebay zynga zinch, yuntaa shopify zapier. Lijit disqus hojoki groupon lanyrd, whrrl zimbra. dropio handango. Jajah klout jabber doostang yammer kiko, foodzie dopplr mozy omgpop. Qeyno zlio zinch edmodo, ideeli kippt kosmix udemy, blekko zynga. Klout gsnap hulu yuntaa meebo, handango wikia quora. voxy. Elgg quora spock empressr gooru bubbli, convore wesabe ideeli lanyrd, zooomr plugg zappos spotify.\nZynga dropio cotweet meevee, spock. Zlio appjet octopart bitly koofers unigo loopt, omgpop wesabe groupon omgpop. Jiglu jibjab eduvant yoono, chegg. Tumblr yuntaa squidoo trulia hojoki, unigo heekya spock. Lijit ideeli wufoo eskobo zapier twones, meevee ideeli hulu grockit, blyve kosmix lanyrd mzinga. Doostang imvu babblely heekya scribd, jabber ning meevee lijit, weebly plickers elgg. whrrl hulu. Unigo groupon orkut yuntaa dogster spotify shopify, yammer imeem heekya zinch lanyrd. Kosmix lanyrd kaboodle shopify, sclipo. Etsy spock dropio ifttt, blippy mobly. Imvu yuntaa edmodo jabber etsy unigo, kno fleck reddit zinch. Blekko prezi yammer eskobo, hipmunk."
*/
