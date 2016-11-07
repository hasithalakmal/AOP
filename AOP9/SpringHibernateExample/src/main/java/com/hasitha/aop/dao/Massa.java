/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author Hasitha Lakmal
 */
public class Massa {

    public String getMsg() {
        return "This is working";
    }

    public void db() {
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        try {
            Class.forName("com.mysql.jdbc.Driver");

            Connection con = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/springhibernateexample", "root", "");

            //here sonoo is database name, root is username and password  
            Statement stmt = con.createStatement();

            ResultSet rs = stmt.executeQuery("select * from employee");

            while (rs.next()) {
                System.out.println(rs.getInt(1) + "  " + rs.getString(2));
            }

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
        System.out.println("<<<<<<<<<<<<<<<<<<<<<<<<<");
    }

}
