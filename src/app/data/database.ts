
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Config } from '../util/Config';

@Injectable()
export class Database {

    theConsole: string = "Console Messages";
    table_user: string = "create table user (idUser int NOT NULL AUTO_INCREMENT,username VARCHAR(255), password VARCHAR(255), email varchar(255))"
    table_cont: string = "create table conts (id int NOT NULL AUTO_INCREMENT,username varchar(255), date datetime, conts integer(10), leve integer(10)," +
        +"question integer(10))";

    options: any = {
        name: 'data.db',
        location: 'default',
        createFromLocation: 1
    }

    private db: SQLiteObject;
    private config: Config;

    constructor(private sqlite: SQLite) {

    }

    public connectToDb(): void {

        this.sqlite.create(this.options)
            .then((db: SQLiteObject) => {

                this.db = db;
                this.db.executeSql(this.table_user, []),
                    this.db.executeSql(this.table_cont, [])
                        .then(() => this.theConsole += 'Executed SQL' + this.config.tb_user)
                        .catch(e => this.theConsole += "Error: " + JSON.stringify(e));
            })
            .catch(e => this.theConsole += JSON.stringify(e));

    }
    public createTable(): void{
        
    }

    addUser(username, password, email): void {

        var sql = "INSERT INTO `user` (username,password,email) VALUES ('" + username + "','" + password + "', '" + email + "')";

        this.db.executeSql(sql, [])
            .then(() => this.theConsole += "\n" + 'Executed SQL' + sql)
            .catch(e => this.theConsole += "Error: " + JSON.stringify(e));

    }
    getDealer() {
        var sql = "SELECT * FROM user";

        this.db.executeSql(sql, [])
            .then((result) => {
                this.theConsole += JSON.stringify(result);
                if (result.rows.length > 0) {
                    this.theConsole += 'Result' + result.rows.item(0);
                }
                this.theConsole += "\n" + result.rows.item(0).username + result.rows.item(0).password;
                this.theConsole += "\n" + 'Rows' + result.rows.length;

            })

            .catch(e => this.theConsole += JSON.stringify(e));
    }

    getConsoleMessages() {
        return this.theConsole;
    }

}