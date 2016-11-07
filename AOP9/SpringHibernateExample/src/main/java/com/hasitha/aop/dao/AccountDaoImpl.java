/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.hasitha.aop.model.Access;
import com.hasitha.aop.model.Account;
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
public class AccountDaoImpl implements AccountDao {

    @Override
    public void addAccount(int acc_acch_id, double acc_balance) {
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "INSERT INTO account(acc_acch_id,acc_balance) VALUES (?, ?);";
            PreparedStatement st = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            st.setInt(1, acc_acch_id);
            st.setDouble(2, acc_balance);

            int affectedRows = st.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("Creating user failed, no rows affected.");
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public Account getAccount(int acc_id) {
        Account ah = new Account();
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "SELECT * FROM account where acc_id = ?;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setInt(1, acc_id);
            ResultSet res = st.executeQuery();
            if (res.next()) {
                ah.setAcc_id(res.getInt("acc_id"));
                ah.setAcc_acch_id(res.getInt("acc_acch_id"));
                ah.setAcc_min_balance(res.getDouble("acc_min_balance"));
                ah.setAcc_balance(res.getDouble("acc_balance"));
                ah.setAcc_type(res.getString("acc_type"));
                ah.setAcc_create(res.getTimestamp("acc_create"));
                ah.setAcc_state(res.getInt("acc_state"));

            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }

        return ah;
    }

    @Override
    public List<Account> getAllAccounts() {
        List<Account> lah = new ArrayList<Account>();
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "SELECT * FROM account;";
            PreparedStatement st = conn.prepareStatement(query);
            ResultSet res = st.executeQuery();
            while (res.next()) {
                Account ah = new Account();
                ah.setAcc_id(res.getInt("acc_id"));
                ah.setAcc_acch_id(res.getInt("acc_acch_id"));
                ah.setAcc_min_balance(res.getDouble("acc_min_balance"));
                ah.setAcc_balance(res.getDouble("acc_balance"));
                ah.setAcc_type(res.getString("acc_type"));
                ah.setAcc_create(res.getTimestamp("acc_create"));
                lah.add(ah);
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }

        return lah;
    }

    @Override
    public List<Account> getUserAccounts(int acc_acch_id) {
        List<Account> lah = new ArrayList<Account>();
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "SELECT * FROM account where acc_acch_id = ?;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setInt(1, acc_acch_id);
            ResultSet res = st.executeQuery();
            while (res.next()) {
                Account ah = new Account();
                ah.setAcc_id(res.getInt("acc_id"));
                ah.setAcc_acch_id(res.getInt("acc_acch_id"));
                ah.setAcc_min_balance(res.getDouble("acc_min_balance"));
                ah.setAcc_balance(res.getDouble("acc_balance"));
                ah.setAcc_type(res.getString("acc_type"));
                ah.setAcc_create(res.getTimestamp("acc_create"));
                lah.add(ah);
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }

        return lah;
    }

}
