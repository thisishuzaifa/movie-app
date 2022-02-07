import {  Component, Input } from '@angular/core';

@Component({
    selector: 'poster',
    template: `<img src='http://image.tmdb.org/t/p/w185/{{posterPath}}'/>`,
})

export class PosterComponent {
    @Input() posterPath!: string;
}

