export class Config{
    public tb_user:string ="create table IF NOT EXISTS 'user' (idUser int NOT NULL AUTO_INCREMENT,username VARCHAR(255), password VARCHAR(255))";
    public tb_conts: string="Create table IF NOT EXISTS 'point' (idUser int, datetimer  DATETIME, lanthi int(10), type VARCHAR(100), point float))";
}