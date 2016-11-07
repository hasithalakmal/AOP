/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.util;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Hasitha Lakmal
 */
public class DBManagement {

    private static DBManagement dbms = new DBManagement();
    ;
    
    private Connection con;

    private DBManagement() {
    }

    public static DBManagement getInstance() {
        return dbms;
    }

    public Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        con = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/aop_2012cs077", "root", "");
        return this.con;
    }

}
