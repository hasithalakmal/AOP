/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.hasitha.aop.model.Access;
import com.hasitha.aop.model.AccountHolder;
import com.hasitha.aop.util.DBManagement;
import com.mysql.jdbc.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Component;

/**
 *
 * @author Hasitha Lakmal
 */
@Component
public class AccessDaoImpl implements AccessDao {

    @Override
    public void addAccess(String pass_user_name, String pass_password, String pass_api_key, int pass_acch_id, String pass_user_type) {
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "INSERT INTO access (pass_user_name, pass_password, pass_api_key, pass_acch_id, pass_user_type) VALUES (?,?,?,?,?);";
            PreparedStatement st = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            st.setString(1, pass_user_name);
            st.setString(2, pass_password);
            st.setString(3, pass_api_key);
            st.setInt(4, pass_acch_id);
            st.setString(5, pass_user_type);
            int affectedRows = st.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("Creating user failed, no rows affected.");
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public void updateAccess(String pass_user_name, String pass_password) {
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "UPDATE access SET pass_password=? WHERE pass_user_name = ?;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setString(1, pass_password);
            st.setString(2, pass_user_name);
            st.executeUpdate();
           
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex);
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public void approveAccess(String pass_user_name) {
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "UPDATE access SET pass_status=1 WHERE pass_user_name = ?;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setString(1, pass_user_name);
            st.executeUpdate();
           
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex);
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public Access login(String pass_user_name, String pass_password) {
        Access ah = new Access();
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "SELECT * FROM access where pass_user_name = ? and pass_password = ?;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setString(1, pass_user_name);
            st.setString(2, pass_password);
            ResultSet res = st.executeQuery();
            if (res.next()) {
                ah.setPass_user_name(res.getString("pass_user_name"));
                ah.setPass_password(res.getString("pass_password"));
                ah.setPass_api_key(res.getString("pass_api_key"));
                ah.setPass_acch_id(res.getInt("pass_acch_id"));
                ah.setPass_user_type(res.getString("pass_user_type"));
                ah.setPass_status(res.getInt("pass_status"));

            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }

        return ah;
    }

    @Override
    public Access getAccess(String pass_user_name) {
        Access ah = new Access();
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "SELECT * FROM access where pass_user_name = ?;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setString(1, pass_user_name);
            ResultSet res = st.executeQuery();
            if (res.next()) {
                ah.setPass_user_name(res.getString("pass_user_name"));
                ah.setPass_password(res.getString("pass_password"));
                ah.setPass_api_key(res.getString("pass_api_key"));
                ah.setPass_acch_id(res.getInt("pass_acch_id"));
                ah.setPass_user_type(res.getString("pass_user_type"));
                ah.setPass_status(res.getInt("pass_status"));

            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }

        return ah;
    }

}
