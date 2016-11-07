/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.service;

import com.hasitha.aop.dao.Client_messageDao;
import com.hasitha.aop.model.Client_message;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Hasitha Lakmal
 */
@Component
public class Client_messageManagementServiceImpl implements Client_messageManagementService{

    @Autowired
    Client_messageDao client_messageDao;
    
    @Override
    public String addClient_message(String msg_title, String msg_body, int msg_acch_id) {
        client_messageDao.addClient_message(msg_title, msg_body, msg_acch_id);
        return  "{\"msg\":\"success\"}";
    }

    @Override
    public List<Client_message> getAllClient_messages() {
        List<Client_message> cm = client_messageDao.getAllClient_messages();
        return cm;
    }

    
    
}
