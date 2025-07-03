import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-blank-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './blank-layout.html',
  styleUrl: './blank-layout.scss'
})
export class BlankLayout {

}
