/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.hasitha.aop.model.AccountHolder;
import com.hasitha.aop.util.DBManagement;
import com.mysql.jdbc.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.stereotype.Component;

/**
 *
 * @author Hasitha Lakmal
 */
@Component
public class AccountHolderDaoImpl implements AccountHolderDao {

    @Override
    public void addAccountHolder(String acch_name, String acch_mobile, String acch_adress) {
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "INSERT INTO accountholder (acch_name, acch_mobile, acch_adress) VALUES (?,?,?);";
            PreparedStatement st = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            st.setString(1, acch_name);
            st.setString(2, acch_mobile);
            st.setString(3, acch_adress);
            int affectedRows = st.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("Creating user failed, no rows affected.");
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public void updateAccountHolder(int acch_id, String acch_name, String acch_mobile, String acch_adress) {
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "UPDATE accountholder SET acch_name=?, acch_mobile=?, acch_adress=? WHERE acch_id=?;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setString(1, acch_name);
            st.setString(2, acch_mobile);
            st.setString(3, acch_adress);
            st.setInt(4, acch_id);
            st.executeUpdate();
           
        } catch (SQLException | ClassNotFoundException ex) {
            System.out.println(ex);
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public AccountHolder getAccountHolder(int acch_id) {
        AccountHolder ah = new AccountHolder();
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "SELECT * FROM accountholder where acch_id = ?;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setInt(1, acch_id);
            ResultSet res = st.executeQuery();
            if(res.next()){
                ah.setAcch_id(res.getInt("acch_id"));
                ah.setAcch_name(res.getString("acch_name"));
                ah.setAcch_mobile(res.getString("acch_mobile"));
                ah.setAcch_adress(res.getString("acch_adress"));
                ah.setAcch_state(res.getInt("acch_state"));
                ah.setAcch_create(res.getTimestamp("acch_create"));
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return ah;
    }

    @Override
    public List<AccountHolder> getAllAccountHolders() {
        List<AccountHolder> lah = new ArrayList<AccountHolder>();
        
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "SELECT * FROM accountholder;";
            PreparedStatement st = conn.prepareStatement(query);
            ResultSet res = st.executeQuery();
            while(res.next()){
                AccountHolder ah = new AccountHolder();
                ah.setAcch_id(res.getInt("acch_id"));
                ah.setAcch_name(res.getString("acch_name"));
                ah.setAcch_mobile(res.getString("acch_mobile"));
                ah.setAcch_adress(res.getString("acch_adress"));
                ah.setAcch_state(res.getInt("acch_state"));
                lah.add(ah);
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return lah;
    }

}
