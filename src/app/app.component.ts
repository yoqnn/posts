import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';

  posts: Array<Post> = [
    {
      title : 'Chat',
      // tslint:disable-next-line:max-line-length
      content : 'Le Chat domestique est la sous-espèce issue de la domestication du Chat sauvage, mammifère carnivore de la famille des Félidés. Il est l’un des principaux animaux de compagnie et compte aujourd’hui une cinquantaine de races différentes reconnues par les instances de certification.',
      loveIts : 0,
      createdAt : new Date()
    },
    {
      title : 'Chien',
      // tslint:disable-next-line:max-line-length
      content : 'Le Chien est la sous-espèce domestique de Canis lupus, un mammifère de la famille des Canidés, laquelle comprend également le Loup gris et le dingo, chien domestique redevenu sauvage.',
      loveIts : 0,
      createdAt : new Date()
    },
    {
      title : 'Lapin',
      // tslint:disable-next-line:max-line-length
      content : 'Le mot lapin est un terme très général qui désigne en français certains animaux lagomorphes à longues oreilles, que l\'on différencie des lièvres par une silhouette moins élancée et par les petits qui naissent aveugles et nus, cachés dans un nid creusé au sol',
      loveIts : 0,
      createdAt : new Date()
    }
  ];
}


class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;
}
