import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface MachineState {
  machineName: string;
  machineState: string;
  machineTime: string;
  machineProgress: string;
  inUse: boolean;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flipStatus(index: number) {
    this.machineState[index].machineState = this.machineState[index].machineState === 'Free for use' ? 'Running' : 'Free for use';
    this.machineState[index].inUse = this.machineState[index].machineState === 'Running';
  }
  title = 'nwp-rd-dashboard';

  machineState: MachineState[] = [
    {
      machineName:'Washing Machine Left',
      machineState:'Running',
      machineTime:'30 minutes',
      machineProgress:'60%',
      inUse: true,
    },
    {
      machineName: 'Washing Machine Right',
      machineState: 'Free for use',
      machineTime: '1:00 hour',
      machineProgress: '50%',
      inUse: false,
    },
    {
      machineName: 'Tumble Left',
      machineState: 'Free for use',
      machineTime: '3:00',
      machineProgress: '30%',
      inUse: false,
    },
    {
      machineName: 'Tumble Right',
      machineState: 'Free for use',
      machineTime: '3:00',
      machineProgress: '30%',
      inUse: false,
    }
  ]
}
