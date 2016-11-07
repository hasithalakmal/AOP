/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hasitha.aop.model;

import java.sql.Timestamp;

/**
 *
 * @author Hasitha Lakmal
 */
public class Client_message {
    private int msg_id;
    private String msg_title;
    private String msg_body;
    private int msg_acch_id;
    private int msg_states;
    private Timestamp msg_create;

    public int getMsg_id() {
        return msg_id;
    }

    public void setMsg_id(int msg_id) {
        this.msg_id = msg_id;
    }

    public String getMsg_title() {
        return msg_title;
    }

    public void setMsg_title(String msg_title) {
        this.msg_title = msg_title;
    }

    public String getMsg_body() {
        return msg_body;
    }

    public void setMsg_body(String msg_body) {
        this.msg_body = msg_body;
    }

    public int getMsg_acch_id() {
        return msg_acch_id;
    }

    public void setMsg_acch_id(int msg_acch_id) {
        this.msg_acch_id = msg_acch_id;
    }

    public int getMsg_states() {
        return msg_states;
    }

    public void setMsg_states(int msg_states) {
        this.msg_states = msg_states;
    }

    public Timestamp getMsg_create() {
        return msg_create;
    }

    public void setMsg_create(Timestamp msg_create) {
        this.msg_create = msg_create;
    }

    @Override
    public String toString() {
        return "Client_message{" + "msg_id=" + msg_id + ", msg_title=" + msg_title + ", msg_body=" + msg_body + ", msg_acch_id=" + msg_acch_id + ", msg_states=" + msg_states + ", msg_create=" + msg_create + '}';
    }
    
    
}
