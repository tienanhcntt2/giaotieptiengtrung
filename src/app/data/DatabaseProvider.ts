import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Http } from '@angular/http';
import { User } from '../model/User';
@Injectable()
export class DatabaseProvider{

    options: any = {
        name: 'data.db',
        location: 'default',
        createFromLocation: 1
    }
    theConsole: string = "Console Messages";
    public db : SQLiteObject;

    table_user: string = "create table user (idUser int NOT NULL AUTO_INCREMENT,username VARCHAR(255), password VARCHAR(255), email varchar(255))"
    table_cont: string = "create table conts (id int NOT NULL AUTO_INCREMENT,username varchar(255), date datetime, conts integer(10), leve integer(10)," +
        +"question integer(10))";

    constructor(public http: Http, public sqlite: SQLite) {
    }

    // create database
    public createDatabase() {
        this.sqlite.create(this.options)
        .then((db: SQLiteObject) => {
          this.db = db;
          })
          .catch(e => alert(e));
      }  
      // create table
      public createTable() {
        this.db.executeSql(this.table_user, []),
        this.db.executeSql(this.table_cont,[])
          .then(() => alert('SQL query executed'))
          .catch(e => alert(e));
      }

      public insertUser(user: User){
        var sql = "INSERT INTO `user` (username,password,email) VALUES ('" + user.username + "','" + user.password + "', '" + user.email + "')";

        this.db.executeSql(sql, [])
            .then(() => this.theConsole += "\n" + 'Executed SQL' + sql)
            .catch(e => this.theConsole += "Error: " + JSON.stringify(e));
      }
      // delete dropDatabase
      public dropDatabase(){
        this.sqlite.deleteDatabase(this.options)
      }
}