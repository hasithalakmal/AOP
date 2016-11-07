/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.hasitha.aop.model.AccountHolder;
import com.hasitha.aop.model.Transaction;
import com.hasitha.aop.util.DBManagement;
import com.mysql.jdbc.Connection;
import java.sql.CallableStatement;
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
public class TransactionDaoImpl implements TransactionDao {

    @Override
    public void transferMoney(int tra_acc_from, double tra_amount, int tra_acc_to) {
        System.out.println(tra_acc_from + " - "+  tra_amount+ " - "+ tra_acc_to);
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "call transferMoney(?,?,?);";
            CallableStatement st = conn.prepareCall(query);
            st.setInt(1, tra_acc_from);
            st.setDouble(2, tra_amount);
            st.setInt(3, tra_acc_to);
            st.executeUpdate();

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public List<Transaction> getTransactionsHistory(int tra_acc_id) {
        List<Transaction> ltr = new ArrayList<Transaction>();
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "select * from transaction where tra_acc_id = ? ;";
            PreparedStatement st = conn.prepareStatement(query);
            st.setInt(1, tra_acc_id);
            ResultSet res = st.executeQuery();
            while (res.next()) {
                Transaction ah = new Transaction();
                ah.setTra_id(res.getInt("tra_id"));
                ah.setTra_acc_id(res.getInt("tra_acc_id"));
                ah.setTra_type(res.getString("tra_type"));
                ah.setTra_related_acc(res.getInt("tra_related_acc"));
                ah.setTra_amount(res.getDouble("tra_amount"));
                ah.setTra_create(res.getTimestamp("tra_create"));
                ltr.add(ah);
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }

        return ltr;
    }

}
