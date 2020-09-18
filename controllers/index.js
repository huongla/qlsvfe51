//Tạo ra mảng dữ liệu quản lý các sinh viên
var mangSinhVien = [];

//Định nghĩa sự kiện khi người dùng click vào nút thêm sinh viên
document.getElementById('btnThemSinhVien').onclick = function () {
    //Tạo đối tượng lưu trữ thông tin người dùng nhập vào
    var sv = new SinhVien();
    var validate = new Validation()
    sv.maSinhVien = document.getElementById('maSinhVien').value;
    sv.tenSinhVien = document.getElementById('tenSinhVien').value;
    sv.email = document.getElementById('email').value;
    sv.diemToan = document.getElementById('diemToan').value;
    sv.diemLy = document.getElementById('diemLy').value;
    sv.diemHoa = document.getElementById('diemHoa').value;
    sv.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    sv.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    //Kiểm tra đối tượng sv
    // console.log(sv);

    //Kiểm tra dữ liệu hợp lệ
    var valid = true;

    //----Kiểm tra rỗng -----
    valid &= validate.kiemTraRong(sv.maSinhVien, 'mã sinh viên', '#err_maSinhVien_ktRong')
        & validate.kiemTraRong(sv.tenSinhVien, 'tên sinh viên', '#err_tenSinhVien_ktRong')
        & validate.kiemTraRong(sv.email, 'email', '#err_email_ktRong')
        & validate.kiemTraRong(sv.diemToan, 'Điểm Toán', '#err_diemToan_ktRong')
        & validate.kiemTraRong(sv.diemLy, 'Điểm Lý', '#err_diemLy_ktRong')
        & validate.kiemTraRong(sv.diemHoa, 'Điểm Hóa', '#err_diemHoa_ktRong')
        & validate.kiemTraRong(sv.diemRenLuyen, 'Điểm Rèn Luyện', '#err_diemRenLuyen_ktRong');

    // ------ Kiểm tra tất cả là ký tự ----

    valid &= validate.kiemTraChu(sv.tenSinhVien, 'Tên sinh viên', '#err_tenSinhVien_allLetters');

    // ------ Kiểm tra email ----

    valid &= validate.kiemTraEmail(sv.email, 'Email sinh viên', '#err_email_format');

    // ------ Kiểm tra số ----

    valid &= validate.kiemTraSo(sv.maSinhVien, "Mã sinh viên", '#err_maSinhVien_allNumber')
        & validate.kiemTraSo(sv.diemToan, "Điểm Toán", '#err_diemToan_allNumber')
        & validate.kiemTraSo(sv.diemLy, "Điểm Lý", '#err_diemLy_allNumber')
        & validate.kiemTraSo(sv.diemHoa, "Điểm Hóa", '#err_diemHoa_allNumber')
        & validate.kiemTraSo(sv.diemRenLuyen, "Điểm Rèn Luyện", '#err_diemRenLuyen_allNumber');

    // ------ Kiểm tra độ dài ----    
    valid &= validate.kiemTraDoDai(sv.maSinhVien, 'Mã sinh viên', '#err_maSinhVien_maxMinLength', 4, 6);

    // ------ Kiểm tra giá trị ----
    valid &= validate.kiemTraGiaTri(sv.diemToan, "Điểm Toán", '#err_diemToan_giaTri', 0, 10)
        & validate.kiemTraGiaTri(sv.diemLy, "Điểm Lý", '#err_diemLy_giaTri', 0, 10)
        & validate.kiemTraGiaTri(sv.diemHoa, "Điểm Hóa", '#err_diemHoa_giaTri', 0, 10)
        & validate.kiemTraGiaTri(sv.diemRenLuyen, "Điểm Rèn Luyện", '#err_diemRenLuyen_giaTri', 0, 10);


    // //trim(): loại bỏ khoảng trống đầu và cuối của chuỗi
    // if(sv.maSinhVien.trim() === ''){
    //     // alert('Mã sinh viên không được bỏ trống!')
    //     document.getElementById('err_maSinhVien_ktRong').innerHTML = 'Mã sinh viên không được bỏ trống!';
    //     // return; //Lệnh trả về và không làm tiếp các đoạn code phía sau
    //     valid = false;
    // }else{
    //     document.getElementById('err_maSinhVien_ktRong').innerHTML = '';
    // }

    // if(sv.tenSinhVien.trim() === ''){
    //     document.getElementById('err_tenSinhVien_ktRong').innerHTML = 'Tên sinh viên không được bỏ trống!';
    //     // return;
    //     valid = false;
    // }else{
    //     document.getElementById('err_tenSinhVien_ktRong').innerHTML = '';
    // }

    // if(sv.email.trim() === ''){
    //     document.getElementById('err_email_ktRong').innerHTML = "Email không được bỏ trống!";
    //     // return;
    //     valid = false;
    // }else{
    //     document.getElementById('err_email_ktRong').innerHTML = '';
    // }

    // if(sv.diemToan === ''){
    //     document.getElementById('err_diemToan_ktRong').innerHTML = "Điểm Toán không được bỏ trống!";
    //     // return;
    //     valid = false;
    // }else{
    //     document.getElementById('err_diemToan_ktRong').innerHTML = '';
    // }

    // if(sv.diemLy === ''){
    //     document.getElementById('err_diemLy_ktRong').innerHTML = "Điểm Lý không được bỏ trống!";
    //     // return;
    //     valid = false;
    // }else{
    //     document.getElementById('err_diemLy_ktRong').innerHTML = '';
    // }

    // if(sv.diemHoa === ''){
    //     document.getElementById('err_diemHoa_ktRong').innerHTML = "Điểm Lý không được bỏ trống!";
    //     // return;
    //     valid = false;
    // }else{
    //     document.getElementById('err_diemHoa_ktRong').innerHTML = '';
    // }

    // if(sv.diemRenLuyen === ''){
    //     document.getElementById('err_diemRenLuyen_ktRong').innerHTML = "Điểm Rèn Luyện không được bỏ trống!";
    //     // return;
    //     valid = false;
    // }else{
    //     document.getElementById('err_diemRenLuyen_ktRong').innerHTML = '';
    // }

    // if(!valid){
    //     return;
    // }

    //Kiểm tra định dạng của chuỗi regex
    // var regex = /cyberlearn/ig;
    // var inputString = 'frontendcyberlearnabc';
    // console.log(regex.test(inputString));  //phương thức test(): kiểm tra 

    var regexAllletters = /^[A-Z a-z]+$/;
    if (!regexAllletters.test(sv.tenSinhVien)) {
        document.getElementById('err_tenSinhVien_allLetters').innerHTML = 'Tên sinh viên phải nhập chữ!';
        valid = false;
    } else {
        document.getElementById('err_tenSinhVien_allLetters').innerHTML = '';
    }




    mangSinhVien.push(sv);
    console.log('mangSinhVien', mangSinhVien);

    //Gọi hàm tạo bảng
    taoBang(mangSinhVien);
    luuLocalStorage();






    // //Tạo thẻ td chứa nội dung người dùng nhập vào
    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;

    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;

    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh().toFixed(2);

    // var tdDiemRenLuyen = document.createElement('td');
    // tdDiemRenLuyen.innerHTML = sv.diemRenLuyen;

    // var tdLoaiSinhVien = document.createElement('td');
    // tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;

    // //Tạo td chứa các nút chức năng xóa sửa
    // var tdChucNang = document.createElement('td');
    // //Tạo các nút button xóa sửa
    // var btnXoaSinhVien = document.createElement('button');
    // btnXoaSinhVien.className = 'btn btn-danger';
    // btnXoaSinhVien.innerHTML = 'Xóa';
    // btnXoaSinhVien.onclick = function () {
    //     //this đại diện cho nút button#btnXoaSinhVien
    //     this.parentElement.parentElement.remove()
    // }

    // //Thêm vào tdChucNang nút xóa
    // tdChucNang.appendChild(btnXoaSinhVien);

    // //Tạo thẻ tr
    // var trSinhVien = document.createElement('tr');

    // //Thêm thẻ td vào tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdLoaiSinhVien);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdDiemRenLuyen);
    // trSinhVien.appendChild(tdChucNang);

    // var tbodySinhVien = document.getElementById('tblSinhVien');
    // tbodySinhVien.appendChild(trSinhVien); 
}



var taoBang = function (arrSinhVien) {
    var contentTable = '';
    //Duyệt qua mảng sinhVien tạo ra các dòng tr
    for (var index = 0; index < arrSinhVien.length; index++) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinhVien từ trong mảng
        var sv = arrSinhVien[index];

        //Tao đối tượng
        var sinhVien = new SinhVien(sv.maSinhVien,sv.tenSinhVien,sv.email,sv.diemToan,sv.diemLy,sv.diemHoa,sv.diemRenLuyen,sv.loaiSinhVien);
        // sinhVien.maSinhVien = sv.maSinhVien;
        // sinhVien.tenSinhVien = sv.tenSinhVien;
        // sinhVien.email = sv.email;
        // sinhVien.diemToan = sv.diemToan;
        // sinhVien.diemHoa = sv.diemHoa;
        // sinhVien.diemLy = sv.diemLy;
        // sinhVien.diemRenLuyen = sv.diemRenLuyen;

        //Tạo thẻ tr + dồn vào nội dung contentTable
        contentTable += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>${sinhVien.tinhDiemTrungBinh()}</td>
                <td>${sinhVien.diemRenLuyen}</td>
                <td><button class="btn btn-primary" onclick="chinhSuaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
            </tr>
        `
    }
    // console.log('contentTable', contentTable); //=> log ra chuỗi nhiều thẻ <tr></tr> chứa thông tin sinh viên
    document.getElementById('tblSinhVien').innerHTML = contentTable;
}
var chinhSuaSinhVien = function(maSV){
    //Khóa chỉnh sửa mã sinh viên
    document.getElementById('maSinhVien').disabled = true;
    
    //Tìm sinh viên có mã sinh viên trong mảng
    for(var index = 0; index < mangSinhVien.length; index ++){
        //Mỗi lần duyệt lấy ra 1 sinh viên
        var sv = mangSinhVien[index];
        //Kiểm tra từng sv => xem sv nào có mã = maSV khi click => gán lên control phía trên
        if(sv.maSinhVien === maSV){
            document.getElementById('maSinhVien').value = sv.maSinhVien;
            document.getElementById('tenSinhVien').value = sv.tenSinhVien;
            document.getElementById('diemToan').value = sv.diemToan;
            document.getElementById('diemLy').value = sv.diemLy;
            document.getElementById('diemHoa').value = sv.diemHoa;
            document.getElementById('diemRenLuyen').value = sv.diemRenLuyen;
            document.getElementById('email').value = sv.email;

        }
    }

    //Gán thông tin sinh viên tìm được lên các control(thẻ input) phía tr6n
}
//xây dựng phương thức cập nhật sinh viên
document.getElementById('btnCapNhatSinhVien').onclick = function(){
    
    //Lấy thông tin người dùng nhập từ giao diện => gán cho đối tượng sinh viên
   
    var svUpdate = new SinhVien();
    svUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    svUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    svUpdate.email = document.getElementById('email').value;
    svUpdate.diemToan = document.getElementById('diemToan').value;
    svUpdate.diemLy = document.getElementById('diemLy').value;
    svUpdate.diemHoa = document.getElementById('diemHoa').value;
    svUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    svUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;

    console.log(svUpdate);
    //Tìm svUpdate có mã trùng với maSV trong mảng => gán dữ liệu sinhVien đó = svUpdate
    for(var index=0; index<mangSinhVien.length; index++){
        var sv = mangSinhVien[index];
        if(sv.maSinhVien === svUpdate.maSinhVien){
            sv.tenSinhVien = svUpdate.tenSinhVien;
            sv.diemToan =  svUpdate.diemToan;
            sv.diemLy =  svUpdate.diemLy;
            sv.diemHoa =  svUpdate.diemHoa;
            sv.diemRenLuyen =  svUpdate.diemRenLuyen;
            sv.email =  svUpdate.email;
        }
    }
    //Gọi hàm tạo lại bảng
    taoBang(mangSinhVien);
    luuLocalStorage();

    //Clear tất cả thông tin và bật lại input mã
    document.getElementById('maSinhVien').disabled = false;
    var mangTheInput = document.querySelectorAll('input');
    for(var i=0; i<mangTheInput.length; i++){
        var tagInput = mangTheInput[i];
        //Gắn lại value = rổng cho từng thẻ 1
        tagInput.value = '';
    }
}

var xoaSinhVien = function (maSV) {
    // alert(maSV);
    //mangSinhVien là biến toàn cục khai báo phía trên đầu file
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinhVien
        var sv = mangSinhVien[index];

        //Kiểm tra từng phần tử sinhVien có mã = với maSV được click ở nút xóa hay không?
        if (sv.maSinhVien === maSV) {
            mangSinhVien.splice(index, 1); // Hàm xóa phần tử của mảng trong js, index:vị trí xóa, 1 là tại vị trí đó xóa 1 phần tử 
        }
    }
    //Sau khi xóa thì tạo lại bảng = mảng dữ liệu đã xóa
    taoBang(mangSinhVien);
    //Lưu vào localstorage sau khi xóa sinh viên
    luuLocalStorage();
}

var luuLocalStorage = function () {
    //Các bước lưu trữ mảng sinh viên xuống localStorage
    var sMangSinhVien = JSON.stringify(mangSinhVien); //=>biến mảng sinh viên thành chuỗi

    // console.log('sMangSinhVien',sMangSinhVien);
    // console.log('mangSInhVien',mangSinhVien)

    //lưu: setItem
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}
var layDuLieuLocalStorage = function () {

    //kiểm tra dữ liệu có trong localStorage chưa?
    if (localStorage.getItem('mangSinhVien')) {
        //Lấy dữ liệu từ local storage
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        //Biến đổi dữ liệu từ chuỗi json => mảng và gán vào mảng sinh viên
        mangSinhVien = JSON.parse(sMangSinhVien);
        
        //Gọi hàm tạo bảng => tạo html
        taoBang(mangSinhVien)

    }
}
layDuLieuLocalStorage();