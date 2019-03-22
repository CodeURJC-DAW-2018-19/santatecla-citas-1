export class LoginObject {

  public name: string;
  public password: string;

  constructor( object: any){
    this.name = (object.username) ? object.username : null;
    this.password = (object.password) ? object.password : null;
  }
}
