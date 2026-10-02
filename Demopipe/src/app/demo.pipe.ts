import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
  standalone: true
})
export class DemoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    var str;
    if(args[0] == "PPA")
    {
      str= value + "Batch which covers fundamentals of programming.";
    }
    else if(args[0] == "LB")
    {
      str= value + "Batch which covers programming logic";
    }
    else if(args[0] == "Angular")
    {
      str= value + "Batch which covers web developement";
    }
    else
    {
      str= "Sorry we dont have such batch";
    }

    return str;
  }

}
