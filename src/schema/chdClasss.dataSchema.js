import React from 'react';
import {Link} from 'react-router';
import {UpdateGPA1, UpdateGPA2} from '../components/UpdateComponentDemo';
//TODO 这个才复制下来明天按照数据库表处理,数据库加create便于模块化操作
module.exports = [
  {
    key: 'collegeId',
    title: '学院ID',
    dataType: 'varchar',
    validator: [{type: 'string', max: 10, message: '最多10个字符'}],
    primary: false,
    showInTable: true,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false
    // eslint-disable-next-line key-spacing
    showInForm:true,
  },
  {
    key: 'mainId',
    title: '系Id',
    dataType: 'varchar',
    primary: false,
    validator: [{type: 'string', max: 10, message: '最多10个字符'}],
    showInTable: false,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false
    // eslint-disable-next-line key-spacing
    showInForm:true,
  },
  {
    key: 'directId',
    title: '专业内方向Id',
    dataType: 'varchar',
    primary: false,
    validator: [{type: 'string', max: 10, message: '最多10个字符'}],
    showInTable: true,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false
    // eslint-disable-next-line key-spacing
    showInForm:true,
  },
  {
    key: 'classId',
    title: '班级号',
    dataType: 'varchar',
    validator: [{type: 'string', max: 10, message: '最多10个字符'}],
    showInTable: true,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false
    // defaultValue: '不填可根据最大班级号加一获得新的班级号', // 默认值, 只在insert时生效, update时不生效
    placeholder: '不填可根据最大班级号加一获得新的班级号',
  },
  {
    key: 'isCreate',
    title: '时间查看',
    dataType: 'varchar',
    primary: true,
    // validator: [{type: 'string', max: 10, message: '最多10个字符'}],
    showInTable: false,  // 这一列是否要在table中展示, 默认true
    disabled: true, // 表单中这一列是否禁止编辑, 默认false
    // eslint-disable-next-line key-spacing
    showInForm:false,
  },


  // 定义针对单条记录的操作
  // 常见的针对单条记录的自定义操作有哪些? 无非是更新和删除
  // 注意, 如果没有定义主键, 是不允许更新和删除的
  {
    // 这个key是我预先定义好的, 注意不要冲突
    key: 'singleRecordActions',
    title: '修改操作',  // 列名
    width: 300,  // 宽度
    actions: [
      {
        name: '修改数据',
        type: 'update',  // 更新单条记录
        // keys: [ 'directName'],  // 允许更新哪些字段, 如果不设置keys, 就允许更所有字段
      },
      {
        name: '删除',
        type: 'delete',  // 删除单条记录
      },
    ],
  },
];
