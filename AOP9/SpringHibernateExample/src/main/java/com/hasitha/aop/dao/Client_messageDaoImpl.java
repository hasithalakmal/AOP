/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.dao;

import com.hasitha.aop.model.Client_message;
import com.hasitha.aop.model.Transaction;
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
public class Client_messageDaoImpl implements Client_messageDao{

    @Override
    public void addClient_message(String msg_title, String msg_body, int msg_acch_id) {
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "INSERT INTO client_message (msg_title, msg_body, msg_acch_id) VALUES (?,?,?);";
            PreparedStatement st = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
            st.setString(1, msg_title);
            st.setString(2, msg_body);
            st.setInt(3, msg_acch_id);
            int affectedRows = st.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("Creating user failed, no rows affected.");
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public List<Client_message> getAllClient_messages() {
        List<Client_message> lmsg = new ArrayList<Client_message>();
        try {
            Connection conn = DBManagement.getInstance().getConnection();
            String query = "select * from client_message;";
            PreparedStatement st = conn.prepareStatement(query);
            ResultSet res = st.executeQuery();
            while (res.next()) {
                Client_message ah = new Client_message();
                ah.setMsg_id(res.getInt("msg_id"));
                ah.setMsg_title(res.getString("msg_title"));
                ah.setMsg_body(res.getString("msg_body"));
                ah.setMsg_acch_id(res.getInt("msg_acch_id"));
                lmsg.add(ah);
            }

        } catch (SQLException | ClassNotFoundException ex) {
            Logger.getLogger(AccountHolderDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }

        return lmsg;
    }

    
}
