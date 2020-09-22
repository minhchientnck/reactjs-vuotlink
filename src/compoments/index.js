import React from 'react';
import RouterView from './RouterView';
import TongQuan from './tongquan';
import ChienDich from './chiendich';
import NapTien from './naptien';
import ThongKe from './thongke';
import ThongTinDangNhap from './thongtindangnhap';

export default {
  TongQuan: {
    name: 'TỔNG QUAN',
    path: '/tong-quan',
    order: 0,
    view: () => <RouterView className="tong-quan"><TongQuan /></RouterView>,
  },
  ChienDich:{
    name: 'CHIẾN DỊCH',
    path: '/chien-dich',
    order: 1,
    view: () => <RouterView className="chien-dich"><ChienDich /></RouterView>,
  },
  NapTien:{
    name: 'NẠP TIỀN',
    path: '/nap-tien',
    order: 2,
    view:  () => <RouterView className="nap-tien"><NapTien /></RouterView>,
  },
  ThongKe: {
    name: 'THỐNG KÊ',
    path: '/thong-ke',
    order: 3,
    view: () => <RouterView className="thong-ke"><ThongKe /></RouterView>
  },
  ThongTinDangNhap: {
    name: 'THÀNH VIÊN',
    path: '/user',
    order: 3,
    view: () => <RouterView className="user"><ThongTinDangNhap /></RouterView>
  },
};
