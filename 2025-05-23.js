// Bai 1
function chuanHoaHoTen(hoTen) {
  return hoTen
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((tu) => tu.charAt(0).toUpperCase() + tu.slice(1).toLowerCase())
    .join(" ");
}
console.log(chuanHoaHoTen("  trẦn   minh    hiẾu "));

// Bai 2
function daoNguocTungTu(chuoi) {
  return chuoi
    .split(" ")
    .map((tu) => tu.split("").reverse().join(""))
    .join(" ");
}
console.log(daoNguocTungTu("Xin chao cac ban"));

// Bai 3
function demTuKhongTrungLap(chuoi) {
  const cacTu = chuoi
    .toLowerCase()
    .split(/\s+/)
    .filter((tu) => tu.length > 0);
  const tuDuyNhat = new Set(cacTu);
  return tuDuyNhat.size;
}
console.log(demTuKhongTrungLap("Hello hello world HELLO"));

// Bai 4
function kiemTraPalindrome(chuoi) {
  const chuoiSach = chuoi.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return chuoiSach === chuoiSach.split("").reverse().join("");
}
console.log(kiemTraPalindrome("A man, a plan, a canal: Panama"));

// Bai 5
function maHoaRLE(chuoi) {
  if (chuoi.length === 0) return "";
  let ketQua = "";
  let kyTuHienTai = chuoi[0];
  let dem = 1;
  for (let i = 1; i < chuoi.length; i++) {
    if (chuoi[i] === kyTuHienTai) {
      dem++;
    } else {
      ketQua += kyTuHienTai + dem;
      kyTuHienTai = chuoi[i];
      dem = 1;
    }
  }
  ketQua += kyTuHienTai + dem;
  return ketQua;
}
console.log(maHoaRLE("aaabbccccd"));
