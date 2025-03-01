import { News, Category } from '../types';

export const newsData: News[] = [
  {
    id: 1,
    title: "Pantai Kuta Lombok Jadi Destinasi Favorit Wisatawan Mancanegara",
    excerpt: "Pantai Kuta Lombok semakin diminati wisatawan mancanegara. Jumlah kunjungan meningkat 30% dibanding tahun lalu.",
    content: "Pantai Kuta Lombok semakin diminati wisatawan mancanegara. Jumlah kunjungan meningkat 30% dibanding tahun lalu. Keindahan pasir putih dan ombak yang cocok untuk berselancar menjadi daya tarik utama.",
    category: "pariwisata",
    categoryName: "Pariwisata",
    author: "Putu Wijaya",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    imageUrl: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "2 jam yang lalu",
    comments: 24
  },
  {
    id: 2,
    title: "Festival Bau Nyale 2025 Siap Digelar Bulan Depan",
    excerpt: "Festival Bau Nyale akan digelar pada 15-17 Februari 2025 di Pantai Seger, Kuta Lombok. Persiapan sudah mencapai 80%.",
    content: "Festival Bau Nyale akan digelar pada 15-17 Februari 2025 di Pantai Seger, Kuta Lombok. Persiapan sudah mencapai 80%. Festival ini merupakan tradisi menangkap cacing laut yang muncul setahun sekali.",
    category: "budaya",
    categoryName: "Budaya",
    author: "Lalu Wirawan",
    authorImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    imageUrl: "https://images.unsplash.com/photo-1580974852861-c381510bc98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "5 jam yang lalu",
    comments: 12
  },
  {
    id: 3,
    title: "Pembangunan Bandara Baru di Lombok Timur Mulai Dikerjakan",
    excerpt: "Pembangunan bandara baru di Lombok Timur resmi dimulai. Proyek senilai 2 triliun rupiah ini ditargetkan selesai dalam 3 tahun.",
    content: "Pembangunan bandara baru di Lombok Timur resmi dimulai. Proyek senilai 2 triliun rupiah ini ditargetkan selesai dalam 3 tahun. Bandara ini akan mempermudah akses wisatawan ke kawasan timur Lombok.",
    category: "ekonomi",
    categoryName: "Ekonomi",
    author: "Baiq Dinda",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    imageUrl: "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "1 hari yang lalu",
    comments: 18
  },
  {
    id: 4,
    title: "Tim Sepak Bola Lombok FC Promosi ke Liga 1",
    excerpt: "Lombok FC berhasil promosi ke Liga 1 setelah mengalahkan Surabaya United dengan skor 2-1 di partai final Liga 2.",
    content: "Lombok FC berhasil promosi ke Liga 1 setelah mengalahkan Surabaya United dengan skor 2-1 di partai final Liga 2. Ini merupakan prestasi bersejarah bagi sepak bola Lombok.",
    category: "olahraga",
    categoryName: "Olahraga",
    author: "Raden Wijaya",
    authorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "2 hari yang lalu",
    comments: 32
  },
  {
    id: 5,
    title: "Gubernur NTB Resmikan Pusat Inovasi Digital di Mataram",
    excerpt: "Gubernur NTB meresmikan Pusat Inovasi Digital di Mataram. Fasilitas ini diharapkan menjadi inkubator startup lokal.",
    content: "Gubernur NTB meresmikan Pusat Inovasi Digital di Mataram. Fasilitas ini diharapkan menjadi inkubator startup lokal. Pusat inovasi ini dilengkapi dengan fasilitas co-working space, lab komputer, dan ruang pelatihan.",
    category: "teknologi",
    categoryName: "Teknologi",
    author: "Dewi Safitri",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "3 hari yang lalu",
    comments: 15
  },
  {
    id: 6,
    title: "Petani Lombok Ekspor Kopi Organik ke Eropa",
    excerpt: "Petani kopi di Lombok Utara berhasil mengekspor 5 ton kopi organik ke beberapa negara Eropa.",
    content: "Petani kopi di Lombok Utara berhasil mengekspor 5 ton kopi organik ke beberapa negara Eropa. Kopi Lombok semakin dikenal di pasar internasional karena kualitasnya yang tinggi.",
    category: "ekonomi",
    categoryName: "Ekonomi",
    author: "Lalu Gunawan",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "4 hari yang lalu",
    comments: 9
  },
  {
    id: 7,
    title: "DPRD Lombok Tengah Sahkan Perda Perlindungan Lahan Pertanian",
    excerpt: "DPRD Lombok Tengah mengesahkan Peraturan Daerah tentang Perlindungan Lahan Pertanian Berkelanjutan.",
    content: "DPRD Lombok Tengah mengesahkan Peraturan Daerah tentang Perlindungan Lahan Pertanian Berkelanjutan. Perda ini bertujuan mencegah alih fungsi lahan pertanian menjadi non-pertanian.",
    category: "politik",
    categoryName: "Politik",
    author: "Ahmad Fadli",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    imageUrl: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "5 hari yang lalu",
    comments: 21
  },
  {
    id: 8,
    title: "Universitas Mataram Buka Program Studi Pariwisata Berkelanjutan",
    excerpt: "Universitas Mataram membuka program studi baru Pariwisata Berkelanjutan untuk mendukung pengembangan pariwisata di NTB.",
    content: "Universitas Mataram membuka program studi baru Pariwisata Berkelanjutan untuk mendukung pengembangan pariwisata di NTB. Program ini akan fokus pada pengembangan pariwisata yang ramah lingkungan dan berbasis masyarakat.",
    category: "pendidikan",
    categoryName: "Pendidikan",
    author: "Ni Made Ayu",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "6 hari yang lalu",
    comments: 14
  }
];

export const popularNews = [
  {
    id: 101,
    title: "Gempa 5,2 SR Guncang Lombok Utara, Tidak Berpotensi Tsunami",
    imageUrl: "https://images.unsplash.com/photo-1498354136128-58f790194fa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    time: "10 jam yang lalu"
  },
  {
    id: 102,
    title: "Harga Tiket Pesawat ke Lombok Turun 20% Selama Musim Liburan",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    time: "1 hari yang lalu"
  },
  {
    id: 103,
    title: "Artis Hollywood Beli Villa Mewah di Kawasan Gili Trawangan",
    imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    time: "2 hari yang lalu"
  },
  {
    id: 104,
    title: "Pemerintah Alokasikan 500 Miliar untuk Infrastruktur Lombok",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    time: "3 hari yang lalu"
  }
];

export const categories: Category[] = [
  { id: 'politik', name: 'Politik', count: 42 },
  { id: 'ekonomi', name: 'Ekonomi', count: 65 },
  { id: 'olahraga', name: 'Olahraga', count: 28 },
  { id: 'teknologi', name: 'Teknologi', count: 19 },
  { id: 'hiburan', name: 'Hiburan', count: 31 },
  { id: 'pendidikan', name: 'Pendidikan', count: 24 },
  { id: 'budaya', name: 'Budaya', count: 37 },
  { id: 'pariwisata', name: 'Pariwisata', count: 53 }
];