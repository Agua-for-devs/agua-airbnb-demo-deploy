import React from 'react';import { Link } from 'react-router-dom';


import image_imageview_15 from '../../../Assets/Brand/Airbnb_logo.png';
import image_imageview_23 from '../../../Assets/Brand/Airbnb_logo_icon.png';
import image_imageview_1522 from '../../../Assets/Brand/Airbnb_logo.png';
import image_imageview_2322 from '../../../Assets/Brand/Airbnb_logo_icon.png';
import image_imageview_112 from '../../../Assets/Social_media/facebook.png';
import image_imageview_122 from '../../../Assets/Social_media/twitter.png';
import image_imageview_132 from '../../../Assets/Social_media/instagram.png';
import image_imageview_11 from '../../../Assets/Social_media/facebook.png';
import image_imageview_12 from '../../../Assets/Social_media/twitter.png';
import image_imageview_13 from '../../../Assets/Social_media/instagram.png';
import styles from './home.module.css';

/**
 * Home component.
 * @component
 * @type {React.FC}
 * 
 * @returns {React.ReactElement} The Home component.
 */
const Home = () =>{
    
    const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
    
    function aguaRender() {
        return(
            <main custom-agua-item="screen"  className={styles.Home}>
                
<section custom-agua-item="layer" className={styles.homebanner}   >
<p custom-agua-item="text" className={styles['text-1-116f85e28fbe44e1ac1ed842a812aec1']}   onClick={() => openInNewTab("https://www.airbnb.com/release")}>Learn about Guest Favorites, the most loved homes on Airbnb</p>
</section>
<section custom-agua-item="layer" className={styles.homeheader}   >
<header custom-agua-item="layer" className={styles.homemenu}   >
<section custom-agua-item="layer" className={styles.homemenuoption1}   >
<section custom-agua-item="layer" className={styles['layer-9-9f660e71cfb9441c8a1c3dc675bbc54c']}   >
<section custom-agua-item="layer" className={styles['layer-10-702b95a6dc164360bd3c571c86f8ca40']}   >
<p custom-agua-item="text" className={styles['text-2-b3a9e3a440134d8b95d8003298e61957']}   >Stays</p>
<p custom-agua-item="text" className={styles['text-3-942541c0bdd84a7b81d2b06688309a02']}   >Experiences</p>
<p custom-agua-item="text" className={styles['text-4-0ca6424f823b43cbb3dbc3eb84bd4aeb']}   onClick={() => openInNewTab("https://www.airbnb.com/s/experiences/online")}>Online Experiences</p>
</section>
<section custom-agua-item="layer" className={styles['layer-613-3deb974500fb472594ab03909ac2b58a']}   >
<Link to="/Home"><img custom-agua-item="imageView" className={styles['imageview-15-d68528a593764b8da49b98dbd0684696']}  alt="imageview-15" src={ image_imageview_15}  /></Link>
<Link to="/Home"><img custom-agua-item="imageView" className={styles['imageview-23-ff74b1ced6a2437a9e0afb390abb653c']}  alt="imageview-23" src={ image_imageview_23}  /></Link>
</section>
<section custom-agua-item="layer" className={styles['layer-11-9b3db02e627c4e9994937aef76c19951']}   >
<p custom-agua-item="text" className={styles['text-8-e29ef2680931422289fbae1185b97d9e']}   onClick={() => openInNewTab("https://www.airbnb.com/host/homes")}>Airbnb your home</p>
<span custom-agua-item="icon" className={styles['icon-4-3f63daa9579744dba431ee9a1e3355cb']}  >language</span>
<section custom-agua-item="layer" className={styles['layer-17-2c7322572780409a87d90faa895b7a6f']}   >
<span custom-agua-item="icon" className={styles['icon-5-8a77b1e8fd7b43359be93d9a7409e384']}  >menu</span>
<span custom-agua-item="icon" className={styles['icon-6-9549e92336b6413388569fb47ee228c0']}  >person</span>
</section>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-1923-2c20bd1031fc43649844ee803a6c16b2']}   >
<section custom-agua-item="layer" className={styles['layer-2123-aacf9835ff26467281f0e7fc61b3f703']}   >
<p custom-agua-item="text" className={styles['text-923-a2f23821699148d3b7aee9c171280825']}   >Where</p>
<p custom-agua-item="text" className={styles['text-1422-fa6a8d4f8cc045a7a35bc7ff15d87511']}   >Search destinations</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2222-c3974e0f6f2b43258039d3642fe86ed1']}   >
<p custom-agua-item="text" className={styles['text-1022-89df866738f241bdba27dc6f29802233']}   >Check in</p>
<p custom-agua-item="text" className={styles['text-1322-d5c64c2905bf4fedbea880b55fceb693']}   >Add dates</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2323-be846e4abba54288bd99d75e330fa451']}   >
<p custom-agua-item="text" className={styles['text-1123-e249464b47d4498897709bf0214935aa']}   >Check out</p>
<p custom-agua-item="text" className={styles['text-1522-5e3733cc2e7b405293925cd2d403576b']}   >Add dates</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2423-a5186f5bd7a3469f9c267f1a86481f34']}   >
<p custom-agua-item="text" className={styles['text-1222-1c7616ae8b904054bd4c9cf6ae637710']}   >Who</p>
<p custom-agua-item="text" className={styles['text-1623-fe21cb6a5eca45f8980bdd310a7e6158']}   >Add guests</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2523-f5433c7d2e934fc78363ade7f452a668']}   >
<span custom-agua-item="icon" className={styles['icon-823-b16dbcd273474565bc2467cd0c777cb6']}  >search</span>
</section>
</section>
</section>
<section custom-agua-item="layer" className={styles.homemenuoption2}   >
<section custom-agua-item="layer" className={styles.homemenuoption2desktopsitemap}   >
<section custom-agua-item="layer" className={styles['layer-1922-5e05af2e120a4b438a2e441fbb11ec3f']}   >
<section custom-agua-item="layer" className={styles['layer-2122-eac455acd2cc434482d1e17bb3d1c508']}   >
<p custom-agua-item="text" className={styles['text-922-c58f4e153e2b4e3c9a3863fec02bd0ac']}   >Anywhere</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2322-2c70dbc8b5fa43fe9ac205b50156e199']}   >
<p custom-agua-item="text" className={styles['text-1122-8be58e80d8654afda0c41fe2edd086a1']}   >Any week</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2422-e8bc777f2fc3434798b37fc188fa16a0']}   >
<p custom-agua-item="text" className={styles['text-1622-1cf43e830fee4bd9bb6673c2a7ecb1b3']}   >Add guests</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2522-5c999764dac84491b44c691946a0eda1']}   >
<span custom-agua-item="icon" className={styles['icon-822-cdf3e83ddcb846b88f483d535e1974fe']}  >search</span>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-2622-77bdd53737274ce6817ac74c5a4405a8']}   >
<span custom-agua-item="icon" className={styles['icon-922-d96e455fe6ce430791ed59c1ddbc92b0']}  >search</span>
<section custom-agua-item="layer" className={styles['layer-2722-818db54ea1954af49f2d6320c3f23013']}   >
<p custom-agua-item="text" className={styles['text-1722-9eda19dd6fe549eb927037b221211b53']}   >Anywhere</p>
<p custom-agua-item="text" className={styles['text-1822-97788b3d5ce84b94a5390791b80c8f18']}   >Any week | Add guests</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-2022-7391679a579a44e7ad2c041555a1cda2']}   >
<span custom-agua-item="icon" className={styles['icon-722-cd26916a0d3c45c19def6f30f1ff0087']}  >tune</span>
</section>
</section>
<Link to="/Home"><section custom-agua-item="layer" className={styles.homemenuoption2logos}   >
<Link to="/Home"><img custom-agua-item="imageView" className={styles['imageview-1522-fcfe7058744b4953969e31b99771c7ad']}  alt="imageview-1522" src={ image_imageview_1522}  /></Link>
<Link to="/Home"><img custom-agua-item="imageView" className={styles['imageview-2322-bcc90889185a47db9fcc6aa63ad976bc']}  alt="imageview-2322" src={ image_imageview_2322}  /></Link>
</section></Link>
<section custom-agua-item="layer" className={styles.homemenuoption2tabletsitemap}   >
<section custom-agua-item="layer" className={styles['layer-21222-8f9d841f57574bf9b69428d874a8108d']}   >
<p custom-agua-item="text" className={styles['text-9222-470aa0dd5c0f4e889938dabc262d1e14']}   >Anywhere</p>
</section>
<section custom-agua-item="layer" className={styles['layer-23222-57366bce24004cfebc665b4f2cc25a69']}   >
<p custom-agua-item="text" className={styles['text-11222-a0ce9c76e5f14ec0a57e656a589fec0c']}   >Any week</p>
</section>
<section custom-agua-item="layer" className={styles['layer-24222-d215d5f02852451284ff737a9b36db90']}   >
<p custom-agua-item="text" className={styles['text-16222-4a4ed2fafbb146798f38099605b4c37c']}   >Add guests</p>
</section>
<section custom-agua-item="layer" className={styles['layer-25222-59596a85c58142c78d505f107227c684']}   >
<span custom-agua-item="icon" className={styles['icon-8222-a8ac1d788c544812a962d19457180d1b']}  >search</span>
</section>
</section>
<section custom-agua-item="layer" className={styles.homemenuoption2user}   >
<p custom-agua-item="text" className={styles['text-822-6e85b875756a404e8658da3a2d6ef94b']}   onClick={() => openInNewTab("https://www.airbnb.com/host/homes")}>Airbnb your home</p>
<span custom-agua-item="icon" className={styles['icon-422-1e1958cf909f435ab0da649a1c6461fe']}  >language</span>
<section custom-agua-item="layer" className={styles['layer-1722-42681755bf4c4fa99fd7f67f9f2a0caa']}   >
<span custom-agua-item="icon" className={styles['icon-522-47e8ef253ac5408d8f5d76b80e199127']}  >menu</span>
<span custom-agua-item="icon" className={styles['icon-622-cdae1b53a95944aba51ad888ea729486']}  >person</span>
</section>
</section>
</section>
</header>
<section custom-agua-item="layer" className={`${styles['homenavbar-orientation']} ${styles['homenavbar']}`}   >
<section custom-agua-item="layer" className={styles.homemobilesearch}   >
<section custom-agua-item="layer" className={styles['layer-19-166785ec082f44338eabbc2382a3268b']}   >
<section custom-agua-item="layer" className={styles['layer-21-3518c9560fcc413984a28b4829c9d163']}   >
<p custom-agua-item="text" className={styles['text-9-d9c34b5b08194309a7b58d5fda7a8048']}   >Where</p>
<p custom-agua-item="text" className={styles['text-14-735e91558b504b75be833cfca7211c81']}   >Search destinations</p>
</section>
<section custom-agua-item="layer" className={styles['layer-22-daf7018566ff4439bc1037c9a023b645']}   >
<p custom-agua-item="text" className={styles['text-10-43a21cd99f164e88882f45f25a8488e1']}   >Check in</p>
<p custom-agua-item="text" className={styles['text-13-38c4fade17ff46c68e0b03f09f52ea8b']}   >Add dates</p>
</section>
<section custom-agua-item="layer" className={styles['layer-23-6a0ab28a65aa469ca7fea7b5be5ed1b8']}   >
<p custom-agua-item="text" className={styles['text-11-50d09289e87d480fba2616e9214c02e9']}   >Check out</p>
<p custom-agua-item="text" className={styles['text-15-539a7cd92dff448e9a1da6d600f0fe85']}   >Add dates</p>
</section>
<section custom-agua-item="layer" className={styles['layer-24-2c813532d3044227956b31e0fea99eb8']}   >
<p custom-agua-item="text" className={styles['text-12-28e448d6d93e442e8ba3bb7907f04b91']}   >Who</p>
<p custom-agua-item="text" className={styles['text-16-5d0908d58c564c7c983bbc0bd3210189']}   >Add guests</p>
</section>
<section custom-agua-item="layer" className={styles['layer-25-088805e57d23422eb480f9fdac3ee3eb']}   >
<span custom-agua-item="icon" className={styles['icon-8-1ce0e2f87613433585c7d77639011d73']}  >search</span>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-26-4d2d7ce321a444899c60a2db75317239']}   >
<span custom-agua-item="icon" className={styles['icon-9-b353b6688f754e89914ae391f2c83fbe']}  >search</span>
<section custom-agua-item="layer" className={styles['layer-27-fa12e032deda447da1547fe07adccf19']}   >
<p custom-agua-item="text" className={styles['text-17-d6578fe888d14656afd78dae6a9b89de']}   >Anywhere</p>
<p custom-agua-item="text" className={styles['text-18-1c617a5d3b1648c19dc1208cdcc8c0ae']}   >Any week | Add guests</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-20-0a3a3729d23445d39908ff87fed1f793']}   >
<span custom-agua-item="icon" className={styles['icon-7-eb52f804fd414b55ae194529f3424e9c']}  >tune</span>
</section>
</section>
<section custom-agua-item="layer" className={styles.homecategories}   >
<section custom-agua-item="layer" className={styles['layer-30-64ab5ae129c44267bce21bd0f50bc4e6']}   >
<section custom-agua-item="layer" className={styles['layer-29-14fe614ce9e54210b037e0cca4c290ec']}   >
<span custom-agua-item="icon"   >cabin</span>
<p custom-agua-item="text" className={styles['text-19-a0abc8d7c89e4a77ba50cd38bc5dc995']}   >Cabins</p>
</section>
<section custom-agua-item="layer" className={styles['layer-292-ae9120f724ba434b8f28abfd41703f8d']}   >
<span custom-agua-item="icon" className={styles['icon-102-9cfe6279da104949834afcf842147378']}  >landscape</span>
<p custom-agua-item="text" className={styles['text-192-e7ae13d99754420486d96b925b2e9671']}   >Amazing views</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2922-3e1eee745c124d8c9668d8f02652aef9']}   >
<span custom-agua-item="icon" className={styles['icon-1022-3ed310389f0d4b058dc180685aaf2f05']}  >pool</span>
<p custom-agua-item="text" className={styles['text-1922-1645ba35e4c54727875c775a5bfa2582']}   >Amazing pools</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2923-24a1f551185c4c0c9e2794b27e30c81a']}   >
<span custom-agua-item="icon" className={styles['icon-1023-080e43afa6bb400d954ccbf5e35197c8']}  >sailing</span>
<p custom-agua-item="text" className={styles['text-1923-710d1a5799ca478dabd5baa08fb536d5']}   >Boats</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2924-747624584cfa4d9db658f0e126f1b267']}   >
<span custom-agua-item="icon" className={styles['icon-1024-0c7377166dd1488081df1ee9a4af1ecd']}  >downhill_skiing</span>
<p custom-agua-item="text" className={styles['text-1924-6d12ec3e2d004e5c83e39b8b331ee18e']}   >Skiing</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2925-f308799e658f4197bf241cc1a29db7a1']}   >
<span custom-agua-item="icon" className={styles['icon-1025-9fb563dd00ca4980bd5e05af748e2fd5']}  >house</span>
<p custom-agua-item="text" className={styles['text-1925-434ba05c6055414e8f1ba7049fa587c0']}   >Mansions
</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2926-6ed3204f88044836ab8f065ab46a1af7']}   >
<span custom-agua-item="icon" className={styles['icon-1026-fe28a2caac0b4f93b6bff96eb53ece47']}  >bungalow</span>
<p custom-agua-item="text" className={styles['text-1926-c5001aa5d61c49a58b8d1e5079d97202']}   >Tiny homes
</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2927-a4914331f56f43a5b0d68b6c24848225']}   >
<span custom-agua-item="icon" className={styles['icon-1027-2e6f22069f6d4d7c94133be8828e71d7']}  >houseboat</span>
<p custom-agua-item="text" className={styles['text-1927-2110d630a8b0455ab068d56549f03a04']}   >Lakefront</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2928-0a59cd207481490e947faef7032f8d86']}   >
<span custom-agua-item="icon" className={styles['icon-1028-ecca65cb605e4dc2ad1dd378f81e7cb7']}  >local_fire_department</span>
<p custom-agua-item="text" className={styles['text-1928-09e7c8e97d7f4dffa69c39c921840d2f']}   >Trending</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2929-7b1260089f6a4eeb9de62533054ec330']}   >
<span custom-agua-item="icon" className={styles['icon-1029-736096e6fc684e628b0deb67b5fad136']}  >villa</span>
<p custom-agua-item="text" className={styles['text-1929-013929bb008d4b35b4c82b3adbc0a4d7']}   >Design</p>
</section>
<section custom-agua-item="layer" className={styles['layer-29210-94204f4e427a4fc3b5452155d977f614']}   >
<span custom-agua-item="icon" className={styles['icon-10210-fd583feba03f4187af11f098272108b6']}  >brunch_dining</span>
<p custom-agua-item="text" className={styles['text-19210-151bd6f18a144a72aa02d5ebae5339bb']}   >Luxe</p>
</section>
<section custom-agua-item="layer" className={styles['layer-29211-dea4ded8a77144628e4f3323b639c2ea']}   >
<span custom-agua-item="icon" className={styles['icon-10211-44c3cad2e1f541009cd939c43dec89f9']}  >beach_access</span>
<p custom-agua-item="text" className={styles['text-19211-f2b81e2bea0047f9a80e5ad75ebda671']}   >Beachfront</p>
</section>
<section custom-agua-item="layer" className={styles['layer-292112-04811954dcf34e2fbc3d40bcfbc81ef0']}   >
<span custom-agua-item="icon" className={styles['icon-102112-69956c0a31794de7b7f0ee40d4c32dae']}  >sports_golf</span>
<p custom-agua-item="text" className={styles['text-192112-5888a2d0cb3645089ab41621661d4b42']}   >Golfing</p>
</section>
<section custom-agua-item="layer" className={styles['layer-292113-64327c2f35e543c59c379f8961b38204']}   >
<span custom-agua-item="icon" className={styles['icon-102113-d3655fe314be4d188d90495e5b39b4b3']}  >ac_unit</span>
<p custom-agua-item="text" className={styles['text-192113-1882a0410a154c8dadfc37c258aaaef5']}   >Artic</p>
</section>
<section custom-agua-item="layer" className={styles['layer-292114-7aa898568c014286ad907540c39ff99c']}   >
<span custom-agua-item="icon" className={styles['icon-102114-8e4614d06b6c4eb18f24034a483014af']}  >coffee</span>
<p custom-agua-item="text" className={styles['text-192114-ffabb913cf624601880eda5c40969883']}   >Bed & breakfast</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-31-cdb8b474184e408b9ec40eb681a785fc']}   >
<span custom-agua-item="icon" className={styles['icon-12-d7dd5510f8b34a8996a18c791fb0751b']}  >tune</span>
<p custom-agua-item="text" className={styles['text-21-f041394eb2df4fd0a7c9679817e3a679']}   >Filters</p>
</section>
<section custom-agua-item="layer" className={styles['layer-32-e350367e1071427e9cd896b5275a7c75']}   >
<p custom-agua-item="text" className={styles['text-20-e8ed2d2b2d654a5795f870c9e4e83627']}   >Display total before taxes</p>
<span custom-agua-item="icon" className={styles['icon-11-0a8f84d45a3949e3af75ceeb8e51d989']}  >toggle_off</span>
</section>
</section>
</section>
</section>
<section custom-agua-item="layer" className={styles.hombebody}   >
<section custom-agua-item="layer" className={styles.homebodyfilter}   >
<section custom-agua-item="layer" className={styles['layer-322-598f1d895e394cdab81418f0fc57eadd']}   >
<p custom-agua-item="text" className={styles['text-202-26304c80a7f0413789616609c6af6abc']}   >Display total before taxes</p>
<span custom-agua-item="icon" className={styles['icon-112-f9a4150d09e149f693260f41bd958675']}  >toggle_off</span>
</section>
</section>
<section custom-agua-item="layer" className={styles.homebodymap}   >
<section custom-agua-item="layer" className={styles['layer-509-6f334f4adc0e46c386832608f8764e64']}   >
<p custom-agua-item="text" className={styles['text-419-310e90442fb54af48792cf7e2c12da8f']}   >Show map</p>
<span custom-agua-item="icon" className={styles['icon-124-3419876093b34e3d8376d346d00dc364']}  >map</span>
</section>
<section custom-agua-item="layer" className={styles['layer-748-c2a3ce2daf2244628c798bac351b8f9d']}   >
<p custom-agua-item="text" className={styles['text-621-3fbbdab5a3324f648eefa5e334f45b45']}   >Map</p>
<span custom-agua-item="icon" className={styles['icon-177-9ba41c091f9349d4bc53e919f8de8a83']}  >map</span>
</section>
</section>
<section custom-agua-item="layer" className={styles.homebodystays}   >
<section custom-agua-item="layer" className={styles['layer-145-dba48d0d38f2443ca0597d6a44faaec2']}   >
<section custom-agua-item="layer" className={styles['layer-152-b5fd4305cef14db89f938518186b284d']}   >
<p custom-agua-item="text" className={styles['text-195-53f2368cbc2245c6b3ce8aa6c1b452a3']}   >Guest favorite</p>
</section>
<Link to="/Stay1"><section custom-agua-item="layer" className={styles['layer-146-e6d1e341f0f044f0afd5ca0c02e8bb93']}   >
<section custom-agua-item="layer" className={styles['layer-150-29102a1b62a24c1cbbe95d5779a89980']}   ></section>
<section custom-agua-item="layer" className={styles['layer-151-b7083b2273c24f49833653a083b0d1af']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1502-a3d9aa8a1a1f4fa99cc435205a8251d8']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1503-26d5eb9615494cc5896e7c60eebadb75']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1504-e310cb24fa964034b2986f6555045293']}   ></section>
</section></Link>
<section custom-agua-item="layer" className={styles['layer-147-368ebcec99944660b90a185a1ea4722c']}   >
<p custom-agua-item="text" className={styles['text-193-37eba9342ae94681a52e50cf2b821f83']}   >Milford, Pennsylvania</p>
<section custom-agua-item="layer" className={styles['layer-149-74a8d6c9ed2047918098ffaffa214890']}   >
<span custom-agua-item="icon" className={styles['icon-53-bbf06de271f64ca8afa3d11305002c25']}  >star</span>
<p custom-agua-item="text" className={styles['text-194-8d38b0de7bc14a2e91b104dd158ce180']}   >4.94</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-189-ceb8204fc540471cb5382486ae3bab97']}   >61 miles away</p>
<p custom-agua-item="text" className={styles['text-190-35d09b240d8e4f369aebecb4762700d8']}   >Jan 22 - 28</p>
<section custom-agua-item="layer" className={styles['layer-148-1c146b920fa34b008972816af630f2b1']}   >
<p custom-agua-item="text" className={styles['text-191-7ea53797b3eb412aa17b34dce70f805f']}   >$350</p>
<p custom-agua-item="text" className={styles['text-192-c7c2911f2b6e4a89aed26c3d6e718e91']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-1452-b51a652c18654f67ab43d5844ec2c753']}   >
<section custom-agua-item="layer" className={styles['layer-1522-3a6b11fca2754f76a01a1b7f0ed142b1']}   >
<p custom-agua-item="text" className={styles['text-1952-0352711aa3c34ce2961304d6cb2c7359']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-1462-30e8b8ccd80d4eedb13ca6d341ca3e81']}   >
<section custom-agua-item="layer" className={styles['layer-1505-a7799463d1b24c3b8cec37a9214a19ea']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1512-c87dd50735334762a91ca66caea9fe2b']}   ></section>
<section custom-agua-item="layer" className={styles['layer-15022-38f2013f6d254c4ca19152a4c8e2a707']}   ></section>
<section custom-agua-item="layer" className={styles['layer-15032-ce0bbdd31001488ba78b5af2c0bea363']}   ></section>
<section custom-agua-item="layer" className={styles['layer-15042-394e9312ef984a1cb857d9566ea27775']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-1472-43d05ba561c0442493c38d5cdde2bb53']}   >
<p custom-agua-item="text" className={styles['text-1932-3ac44c06ae224d34b305b97f3e8dbf5c']}   >Warwick, New York</p>
<section custom-agua-item="layer" className={styles['layer-1492-fee73dd52f354f0f83ae01d38b24565a']}   >
<span custom-agua-item="icon" className={styles['icon-532-934437f142f245248f32c71d6b76e2e4']}  >star</span>
<p custom-agua-item="text" className={styles['text-1942-94ef9ee338ac4243be28085db48283cd']}   >4.97</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-1892-63b395c0b1614b1984ef5ff7d148a359']}   >44 miles away</p>
<p custom-agua-item="text" className={styles['text-1902-8f3cfa478a734bdaa850b313aefb703e']}   >Jan 21 - 26</p>
<section custom-agua-item="layer" className={styles['layer-1482-0ec0fcaf13644aad86082babbfcef12b']}   >
<p custom-agua-item="text" className={styles['text-1912-191b6ea11d8c4fb4a45a931094a82825']}   >$283</p>
<p custom-agua-item="text" className={styles['text-19212-28fe0b060e2b42f0bdeade73223e6926']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-14522-05ee7a9187cb455bb82d2581176eae96']}   >
<section custom-agua-item="layer" className={styles['layer-15222-31355a4b67d847bba96fcdcd8d2a026d']}   >
<p custom-agua-item="text" className={styles['text-19522-beb6e3bef9584922847ffc0023b34735']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-14622-d25e891470ff45a7906d27549277d9fe']}   >
<section custom-agua-item="layer" className={styles['layer-15052-fa8fbe6b83ef4e38b8d508d95e3e84b3']}   ></section>
<section custom-agua-item="layer" className={styles['layer-15122-bfbef03ba9684ae6a47f1c8b9605e3ba']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150222-87846b13a8ca4817a26f84fc1bd64cab']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150322-7c66a04bebdb402682bbcbbbd3b9d529']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150422-661f673a38ca4906934b70f6975d50a7']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-14722-f45c84fa4cdd4c9ea04c5061f66b999b']}   >
<p custom-agua-item="text" className={styles['text-19322-3c4912c91a5b4505be603d504705a4ea']}   >Frenchtown, New Jersey</p>
<section custom-agua-item="layer" className={styles['layer-14922-29be5512eafd4ca59aa39d63c845d9b2']}   >
<span custom-agua-item="icon" className={styles['icon-5322-5ea1d5a3963e4dffb8dd790982f9b29d']}  >star</span>
<p custom-agua-item="text" className={styles['text-19422-120a1368b4ea47a6b0c6849d328f4072']}   >5.0</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-18922-bc9986e9f6b54f93822f5b45b80a7c03']}   >57 miles away</p>
<p custom-agua-item="text" className={styles['text-19022-2ee50ca1afad4a849494a09e0a52caca']}   >Jan 12 - 17</p>
<section custom-agua-item="layer" className={styles['layer-14822-f4d9db0246ef481e85ffea864c45f2bd']}   >
<p custom-agua-item="text" className={styles['text-19122-6b49164220f04fc1a76af65afcfe66aa']}   >$295</p>
<p custom-agua-item="text" className={styles['text-192122-780f71f12bb34af193dcd02b9eab6f51']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-14523-97b81d68a6d54312bf1f88febcd51af2']}   >
<section custom-agua-item="layer" className={styles['layer-15223-829dcd6d39834bfeb28f231393f881f4']}   >
<p custom-agua-item="text" className={styles['text-19523-55462c9474ed4ea289bc6d348bdefb1f']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-14623-d9ae52815520405db0a6a5d048803b50']}   >
<section custom-agua-item="layer" className={styles['layer-15053-5ff7e2cb8ad948cdab3f37259b739f10']}   ></section>
<section custom-agua-item="layer" className={styles['layer-15123-b251b1c25a644a0da8caa7aa75ec2858']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150223-949331cd626148f388be8415d2bc4d6b']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150323-733118497760465db11f19290122f151']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150423-dab63b7384b541f6899b020f5111b299']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-14723-86be9cd66cbb4e2c9f6643057385eb1b']}   >
<p custom-agua-item="text" className={styles['text-19323-44a9c59a907746728f69e3e97923dc08']}   >Pine Bush, New York</p>
<section custom-agua-item="layer" className={styles['layer-14923-03ef504e751d433ebe871e3d5e289bca']}   >
<span custom-agua-item="icon" className={styles['icon-5323-edc59efe395248299b4b21a36563636b']}  >star</span>
<p custom-agua-item="text" className={styles['text-19423-46ace3f00f63416c8f01e60c7b6b63d1']}   >4.89</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-18923-b0d13488a67d45119f649d13e36fca93']}   >62 miles away</p>
<p custom-agua-item="text" className={styles['text-19023-1038060ea7a8405bb1e5a741d9e5864f']}   >Jan 21 - 26</p>
<section custom-agua-item="layer" className={styles['layer-14823-fefa4811cf8f422eb3bee1efb1945c32']}   >
<p custom-agua-item="text" className={styles['text-19123-f9723f15875145aaa9f0359b6d917dcf']}   >$620</p>
<p custom-agua-item="text" className={styles['text-192123-1a4c2e53260948e1ad93bdbbcdf1a8d5']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-14524-6e76e00b00064969a0399365a3e64563']}   >
<section custom-agua-item="layer" className={styles['layer-15224-25435ff51b8e4b0f9f261388b388eadd']}   >
<p custom-agua-item="text" className={styles['text-19524-2f65e89038884aabae65d6b20f9603ac']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-14624-5efc73b25c864d9792becba7203e3f78']}   >
<section custom-agua-item="layer" className={styles['layer-15054-d1d7fb0ff8b343c4b1753b776a59b8a5']}   ></section>
<section custom-agua-item="layer" className={styles['layer-15124-44434cd048d847388630b3f6f3ee2ff2']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150224-23a2f5972b1d48b18be0e3ed761d07d7']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150324-aa845cee473c4fa2abfce5f8dbb98f6b']}   ></section>
<section custom-agua-item="layer" className={styles['layer-150424-d4ae54f3a5814516b0344c42fc8888a4']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-14724-f9cad10e3a374390bbd631ef109f13fe']}   >
<p custom-agua-item="text" className={styles['text-19324-74d2f4af3bf44a1fb7b73280650e30b1']}   >Middletown, New York</p>
<section custom-agua-item="layer" className={styles['layer-14924-70cf23e2c7a045d0aa5624e536733167']}   >
<span custom-agua-item="icon" className={styles['icon-5324-1bba6cc455494fc38e6031ffbdfb6e3c']}  >star</span>
<p custom-agua-item="text" className={styles['text-19424-aab582bc6ab14ea9b6d1ea13afc51239']}   >4.9</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-18924-3a20c08b72b6430fb5594a78f3bd67aa']}   >55 miles away</p>
<p custom-agua-item="text" className={styles['text-19024-218ce96bbed84e6e9633df9acc566280']}   >Jan 9 - 14</p>
<section custom-agua-item="layer" className={styles['layer-14824-18061516e0e14ebdae2d813c9c62b973']}   >
<p custom-agua-item="text" className={styles['text-19124-866e8e114a7842cfb5a795fc709ff6d4']}   >$178</p>
<p custom-agua-item="text" className={styles['text-192124-3f329693d47a44efb234bb24556f138c']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-145242-ba92a776d1a44a65a1d74a2d68e809bd']}   >
<section custom-agua-item="layer" className={styles['layer-152242-01e864d2e9a740618c2bd52956159782']}   >
<p custom-agua-item="text" className={styles['text-195242-946191105ea64aaba1f77c0d282b71d9']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-146242-a3ab0c388443478e99bc623247985279']}   >
<section custom-agua-item="layer" className={styles['layer-150542-ab00717cbf0240dd9b8739e10d0d6f97']}   ></section>
<section custom-agua-item="layer" className={styles['layer-151242-a4fb98c1462a4b128db2f796944dea4a']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1502242-820a11e40dac44a69826b2090d39feea']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1503242-ead3b77de35f40f1ad3a441b75c1dbf6']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1504242-9de5053f0c4c4e328ab0c763d5c514aa']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-147242-ae67899ed24d4b578a949617f6382afc']}   >
<p custom-agua-item="text" className={styles['text-193242-081e447c35f343f095687f232e655c2a']}   >Narrowsburg, New York</p>
<section custom-agua-item="layer" className={styles['layer-149242-1573cb5be54449018598bce5bda4678d']}   >
<span custom-agua-item="icon" className={styles['icon-53242-289a40f82a6a41f8abde6a5ea1242fa8']}  >star</span>
<p custom-agua-item="text" className={styles['text-194242-21c6671ee80846bbbad4f243e0b1a7c3']}   >4.96</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-189242-4d3f5d8123ea457ab1f70e28cd81b53e']}   >76 miles away</p>
<p custom-agua-item="text" className={styles['text-190242-43b7ddf384524ea7b9eb47cbcbc5f244']}   >Jan 9 - 14</p>
<section custom-agua-item="layer" className={styles['layer-148242-af4fdb8cdc5f4e16b45a89bc3bd42649']}   >
<p custom-agua-item="text" className={styles['text-191242-892e3aeb48054aa18893ce12887e5307']}   >$345</p>
<p custom-agua-item="text" className={styles['text-1921242-af5dc210aa5c4a7382efb40fb373144c']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-145243-71b3069146404eb1bdf27a67ba0a3988']}   >
<section custom-agua-item="layer" className={styles['layer-152243-6fecac3eaba24a12a603fc19d030695d']}   >
<p custom-agua-item="text" className={styles['text-195243-2ad0714043124be08b2b239a5f63933e']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-146243-5334edb09f0948038dc6853ca4c5b2f2']}   >
<section custom-agua-item="layer" className={styles['layer-150543-57b5732a731c4da3b75db2be70d8e832']}   ></section>
<section custom-agua-item="layer" className={styles['layer-151243-ca327f26ae70408fa4b1f68b9f33957a']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1502243-fb6cce5428e7423aaea89e0b54794c63']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1503243-2f462c7f820547a29fd5d8af4998d86e']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1504243-2c338d26d7114049aed6e28092166234']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-147243-f14fdba336ca447cb46ef5fd40e9cbdb']}   >
<p custom-agua-item="text" className={styles['text-193243-af1cc2dc366546a586be9030df245515']}   >Eldred, New York</p>
<section custom-agua-item="layer" className={styles['layer-149243-89b76d7bb3f64648b17dbf3088abe457']}   >
<span custom-agua-item="icon" className={styles['icon-53243-d5197867e7ce40f3b8ebb569f3c3405b']}  >star</span>
<p custom-agua-item="text" className={styles['text-194243-771937546f5a4cd1961ccf0bb693b81d']}   >4.94</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-189243-f48cc53ac4fa41a4a2681ecf20251995']}   >72 miles away</p>
<p custom-agua-item="text" className={styles['text-190243-17c2b3308642431a94c2ac82efb9f0c1']}   >Jan 15 - 20</p>
<section custom-agua-item="layer" className={styles['layer-148243-e17ab2cfe291422cb8680f282810d3d8']}   >
<p custom-agua-item="text" className={styles['text-191243-1f78a0c2896e4479a83fe6af6e0bde97']}   >$400</p>
<p custom-agua-item="text" className={styles['text-1921243-0948b8bcc99c4c3180cc8771c393149d']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-145244-b4f7d2197bd24c9baabc1f919aea1785']}   >
<section custom-agua-item="layer" className={styles['layer-152244-fcee3289729a46d980d913df38aa3ee4']}   >
<p custom-agua-item="text" className={styles['text-195244-4e46bd3eda9a4938a1d38c8b4b841da0']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-146244-19d0d94c0f0d4526915ed5d2fd681234']}   >
<section custom-agua-item="layer" className={styles['layer-150544-05c5681d2c81406db6d09b277711eb60']}   ></section>
<section custom-agua-item="layer" className={styles['layer-151244-4dbc5b183e41485694c8717644b872ea']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1502244-8432fab6957b4559aa9d78136171f0fe']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1503244-3365ed4d6b56420fb1b81f6a23c6c787']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1504244-6d878a9110294bdab19df8f688e842ac']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-147244-548b72e10d9b43dfad193cfb9b65b36f']}   >
<p custom-agua-item="text" className={styles['text-193244-410e59098d1c4ba7b82ab5fb40ca87df']}   >Pine Bush, New York</p>
<section custom-agua-item="layer" className={styles['layer-149244-bf75cdcd61984055bf32950f9864fe22']}   >
<span custom-agua-item="icon" className={styles['icon-53244-ea6e5ae118d74c9abd836bd9b8b245ea']}  >star</span>
<p custom-agua-item="text" className={styles['text-194244-4b06d311102a40f4b48bbbc83bc8973e']}   >4.87</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-189244-9e95b7c9618943ed8bec2f9fff324bff']}   >61 miles away</p>
<p custom-agua-item="text" className={styles['text-190244-94a7dc1fd51c46a8a93d1f164f285ea5']}   >Jan 8 - 13</p>
<section custom-agua-item="layer" className={styles['layer-148244-b7fcc35712024e5d98ac42017b516811']}   >
<p custom-agua-item="text" className={styles['text-191244-66a5a32e6c764d9db873010bcb122b42']}   >$185</p>
<p custom-agua-item="text" className={styles['text-1921244-f57038b4b34c4a70863a30e7d5d99070']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-145245-30626ad6c2514d3db17b570166ab50ba']}   >
<section custom-agua-item="layer" className={styles['layer-152245-82891657d030413cb7155935b8d3da85']}   >
<p custom-agua-item="text" className={styles['text-195245-13df94a664394ccbbfb1a2913f4cf18c']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-146245-7bc09368dd57456c850ae8f9eeb4f7aa']}   >
<section custom-agua-item="layer" className={styles['layer-150545-900610749b554795ba2462bc2e4997ed']}   ></section>
<section custom-agua-item="layer" className={styles['layer-151245-a3c6a6fa87a543988db1aedea519af47']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1502245-d3daf81babac45d7afcdce68ac9ee441']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1503245-e78278e87de847599d6650d687744cb6']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1504245-c640684759a0442dbdce641ea23e3adc']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-147245-5218bfbe733b406f9586777e1a10099a']}   >
<p custom-agua-item="text" className={styles['text-193245-a4a0f63d266d4bf88b49abe57056b963']}   >Narrowsburg, New York</p>
<section custom-agua-item="layer" className={styles['layer-149245-5a4f9db488f54cf3bcea810e5875cc5b']}   >
<span custom-agua-item="icon" className={styles['icon-53245-3ed320cfcea442a19217c1ad038b3f0e']}  >star</span>
<p custom-agua-item="text" className={styles['text-194245-4374fbaef876481c95ecbfc25f7ac7c4']}   >4.93
</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-189245-58f2e7ca51b14ce6a5bfa59a8b3d4f99']}   >79 miles away
</p>
<p custom-agua-item="text" className={styles['text-190245-327fd71e13a849b28c747b955f7ee49f']}   >Jan 8 - 13
</p>
<section custom-agua-item="layer" className={styles['layer-148245-4ad88520587b499c9961ff3ff9dec220']}   >
<p custom-agua-item="text" className={styles['text-191245-535f441e77eb4c5da57392475917d4a9']}   >$260</p>
<p custom-agua-item="text" className={styles['text-1921245-dab68fc61d6f4130909e4eedea14648d']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-145246-6dc6bddde0a04f31bd34c8f21ffed755']}   >
<section custom-agua-item="layer" className={styles['layer-152246-7e2cb28c5be448ebbc699ade7adc784f']}   >
<p custom-agua-item="text" className={styles['text-195246-3ddc22ef222a4f559a52afdb6ffc5a61']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-146246-ac85a249af334730a02bd04be3f74cc9']}   >
<section custom-agua-item="layer" className={styles['layer-150546-15574bb152e7419289b5ea606e8718b3']}   ></section>
<section custom-agua-item="layer" className={styles['layer-151246-74148a9ef9244aecbb26bd77b0102b19']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1502246-ace0668c577244ea963520ffba478670']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1503246-44d09d2b61f94f1288bf5611a5c71e29']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1504246-821758efb0f041a0a935c8ba81ea4e81']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-147246-00e07806647f4c17a18c8ce3b10967d2']}   >
<p custom-agua-item="text" className={styles['text-193246-8ca70933cd644f16a83a584e70d061b7']}   >Warwick, New York</p>
<section custom-agua-item="layer" className={styles['layer-149246-62248107c73c4a2fbb18062e46f1a9f3']}   >
<span custom-agua-item="icon" className={styles['icon-53246-da249ced647b4f82b2b63a47ea4c6193']}  >star</span>
<p custom-agua-item="text" className={styles['text-194246-da89d076d813404d98e3bf627b74d77d']}   >4.92</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-189246-d2b3f6167fb649b992bf68ee43626125']}   >43 miles away</p>
<p custom-agua-item="text" className={styles['text-190246-6d941d0ee7bd4ba3a07ad1d51c9c3b47']}   >Jan 8 - 13</p>
<section custom-agua-item="layer" className={styles['layer-148246-e09dc93d713248f8b07602aa300ba4d6']}   >
<p custom-agua-item="text" className={styles['text-191246-19b30d1070974bc8a94b76a8f6a215d3']}   >$936</p>
<p custom-agua-item="text" className={styles['text-1921246-93318552faa54b50bc9c0a6bbb83cff1']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-145247-0a6371605421496299650952f450fa6a']}   >
<section custom-agua-item="layer" className={styles['layer-152247-5f79155f640c4e5da9f5fc037fc3a715']}   >
<p custom-agua-item="text" className={styles['text-195247-ee393b359bc646b09c841035e558047d']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-146247-b8c9ceaac35140249cd74a1297b57bfe']}   >
<section custom-agua-item="layer" className={styles['layer-150547-f2e86ea4d06c42bdbbeb9c42e3fc14d8']}   ></section>
<section custom-agua-item="layer" className={styles['layer-151247-2729a12db2c842bbae3484249f156847']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1502247-dd3e8fdc06354d3b9873d98aeac8e69b']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1503247-f2c1133434f74f27b5b03a2d304fd226']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1504247-9b89c81104e448e69afa417baeb3f0e4']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-147247-44b0199a99e24e5f8cf7d12dcff396fa']}   >
<p custom-agua-item="text" className={styles['text-193247-e57543c7022b43df80f686bc3a50abc9']}   >Bellport, New York</p>
<section custom-agua-item="layer" className={styles['layer-149247-acf223702aa5423f9d4a020abaf4333e']}   >
<span custom-agua-item="icon" className={styles['icon-53247-0bd2bd9e4fe44fbcb362966a91c2fa84']}  >star</span>
<p custom-agua-item="text" className={styles['text-194247-f1cb8a070de246e3891abb698cb129b9']}   >4.9</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-189247-60194d19b02e440e8f70179ef3dd2515']}   >55 miles away</p>
<p custom-agua-item="text" className={styles['text-190247-c8fe2f931fc64224ab53d7dd61ca61c9']}   >Jan 9 - 14</p>
<section custom-agua-item="layer" className={styles['layer-148247-76f49f21b1df4bbdb79e891f34e17963']}   >
<p custom-agua-item="text" className={styles['text-191247-2876d4f7673d4b32a73e1360064b5840']}   >$599</p>
<p custom-agua-item="text" className={styles['text-1921247-2b3601d061bc403fbeee3abe3a41978c']}   > night</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-145248-63a648209b714006b7278cc684502c07']}   >
<section custom-agua-item="layer" className={styles['layer-152248-1a154909a6fa40d6811be67da5d03ed6']}   >
<p custom-agua-item="text" className={styles['text-195248-50f15ee0d5944476b9635fe4b151623c']}   >Guest favorite</p>
</section>
<section custom-agua-item="layer" className={styles['layer-146248-8e97a5fbfe8c4b64a5fe59c826412401']}   >
<section custom-agua-item="layer" className={styles['layer-150548-8f294a7218c6481c9ea81710c55dae4b']}   ></section>
<section custom-agua-item="layer" className={styles['layer-151248-0ebebe916dbe4bffa95093328b47a337']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1502248-eff94650ce0d475695fc6f7660d27124']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1503248-28a3b3549bba4e1dbce3e2b40af18681']}   ></section>
<section custom-agua-item="layer" className={styles['layer-1504248-028b2f7056a144019e29ed58b8afe7dc']}   ></section>
</section>
<section custom-agua-item="layer" className={styles['layer-147248-80b3fd1c40b24f2d9faf50918869c2c8']}   >
<p custom-agua-item="text" className={styles['text-193248-0f487ddb1ab5440d8f5c3b22f1ce64ae']}   >Philipstown, New York</p>
<section custom-agua-item="layer" className={styles['layer-149248-6bbdd484fa7046f29fd47bda8848bc5a']}   >
<span custom-agua-item="icon" className={styles['icon-53248-caa94f3d5c48481687302347d547fd69']}  >star</span>
<p custom-agua-item="text" className={styles['text-194248-a974ca6b0ef648adbf8ac89436038843']}   >4.76
</p>
</section>
</section>
<p custom-agua-item="text" className={styles['text-189248-167217d71a424e74989681fcf63aa29c']}   >41 miles away</p>
<p custom-agua-item="text" className={styles['text-190248-581b951a2e8b4ad589d7980b9c2c656f']}   >Jan 15 - 20</p>
<section custom-agua-item="layer" className={styles['layer-148248-4f555d27b9db414cad55d70d828c7826']}   >
<p custom-agua-item="text" className={styles['text-191248-ff8b9ee136104eec96cde88052c21a8d']}   >$436</p>
<p custom-agua-item="text" className={styles['text-1921248-b2ba8ad0e2dc4d5da6fa87230e183281']}   > night</p>
</section>
</section>
</section>
<section custom-agua-item="layer" className={styles.homebodyexploring}   >
<p custom-agua-item="text" className={styles['text-421-49196adee82c41fd885321b6a792a88f']}   >Continue exploring cabins</p>
<section custom-agua-item="layer" className={styles['layer-511-0e44ba6420d94ecfb465cd8c7ba1d439']}   >
<p custom-agua-item="text" className={styles['text-422-65219850dc18446bb0b1e4fe83ae0655']}   >Show more</p>
</section>
</section>
</section>
<section custom-agua-item="layer" className={styles.homefooter}   >
<section custom-agua-item="layer" className={styles.homefooterlocal}   >
<p custom-agua-item="text" className={styles['text-191-58d143ed16ca4e2fbe171be416ec898e']}   >Inspiration for future getaways</p>
<section custom-agua-item="layer" className={styles['layer-218-33f3c8d3eafe4f53bc71e29446bb4235']}   >
<p custom-agua-item="text" className={styles['text-192-f0266e911b3141f694466a566acaba57']}   >Popular</p>
<p custom-agua-item="text" className={styles['text-193-3c6bf379755646d987e04bae9d24a1d6']}   >Arts & culture</p>
<p custom-agua-item="text" className={styles['text-199-3894c4b82cef41ca9538d67395ee2ba6']}   >Outdoors</p>
<p custom-agua-item="text" className={styles['text-194-646a575dae1848b1b1f5812f0007c512']}   >Mountains</p>
<p custom-agua-item="text" className={styles['text-195-463507e256034884b6374ae2c8872ea3']}   >Beach</p>
<p custom-agua-item="text" className={styles['text-196-d192530879f5489ea7933f515f582d18']}   >Unique stays</p>
<p custom-agua-item="text" className={styles['text-197-bcb8cf1429664b07a8dcd0bd59712035']}   >Categories</p>
<p custom-agua-item="text" className={styles['text-198-62497240c5e34f76bb4e1b78841c3b74']}   >Things to do</p>
<p custom-agua-item="text" className={styles['text-200-62a43305a1774968bf56edf27d0d2aa4']}   >Airbnb-friendly apartments</p>
</section>
<section custom-agua-item="layer" className={styles['layer-219-5589ec5df5bd4b5581e3647dd306c833']}   >
<section custom-agua-item="layer" className={`${styles['layer-281-bfd89c7c9d5e47f3b4cb6fe63acfa829-orientation']} ${styles['layer-281-bfd89c7c9d5e47f3b4cb6fe63acfa829']}`}   >
<section custom-agua-item="layer" className={styles['layer-282-9877c76d3a5d41c587f97c81dbb57078']}   >
<p custom-agua-item="text" className={styles['text-276-26a9ec16ec144004b1f80854293563c9']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/amazing-pools")}>Amazing pools</p>
<p custom-agua-item="text" className={styles['text-277-f03cd92759f248bca54d2cc05f057ec5']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/arctic")}>Arctic</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2822-2eb9322dd1ef479e9c005210d2e53f92']}   >
<p custom-agua-item="text" className={styles['text-2762-a23a22f98c3c42dfa97534dda8b1ec1d']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/camping")}>Camping</p>
<p custom-agua-item="text" className={styles['text-2772-0df1abd2a1284c4facae6feac427280b']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/campers")}>Campers</p>
</section>
<section custom-agua-item="layer" className={styles['layer-2823-5d22568e59124898a67142f207c0e06c']}   >
<p custom-agua-item="text" className={styles['text-2763-afc738b9602846b2876210212e00027c']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/castles")}>Castles</p>
<p custom-agua-item="text" className={styles['text-2773-64322d180c0b44a5916328a7f14e8a6e']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/containers")}>Containers</p>
</section>
</section>
<section custom-agua-item="layer" className={`${styles['layer-2812-b17fc4454a604f18bfe60927ae2af13a-orientation']} ${styles['layer-2812-b17fc4454a604f18bfe60927ae2af13a']}`}   >
<section custom-agua-item="layer" className={styles['layer-2824-840c032517b140f2ba42df7c3512b4c4']}   >
<p custom-agua-item="text" className={styles['text-2764-aaee67b3573d46859ecd2f59f5f3c112']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/countryside")}>Countryside</p>
<p custom-agua-item="text" className={styles['text-2774-89ab0369ef3c4aafb787a794adcaddb2']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/design")}>Design</p>
</section>
<section custom-agua-item="layer" className={styles['layer-28222-6aaf7c5c18214aab98203756f26145b4']}   >
<p custom-agua-item="text" className={styles['text-27622-5149ffc4f03b4f81a117ca9c1fbe3f5c']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/earth-homes")}>Earth homes
</p>
<p custom-agua-item="text" className={styles['text-27722-23e1d50da3564889b778b45a7c70101b']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/farms")}>Farms</p>
</section>
<section custom-agua-item="layer" className={styles['layer-28232-b43a1f49f19e4f35b116bfdb5677ba56']}   >
<p custom-agua-item="text" className={styles['text-27632-26e835c47fa84c908e1f0941a566be8d']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/national-parks")}>National parks
</p>
<p custom-agua-item="text" className={styles['text-27732-14e49b7d620f43d3b8237a6e8b195110']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/vineyards")}>Vineyards</p>
</section>
</section>
<section custom-agua-item="layer" className={`${styles['layer-2813-c33dec6d857a44d88e9ac2fc9ec68133-orientation']} ${styles['layer-2813-c33dec6d857a44d88e9ac2fc9ec68133']}`}   >
<section custom-agua-item="layer" className={styles['layer-2825-a373021fccff4fcaa8515c489e251b57']}   >
<p custom-agua-item="text" className={styles['text-2765-4b88b245f21f432498d181a8baf15ee9']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/omg")}>OMG!</p>
<p custom-agua-item="text" className={styles['text-2775-7740b51558d841a584a1a5042fe00159']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/tiny-homes")}>Tiny homes</p>
</section>
<section custom-agua-item="layer" className={styles['layer-28223-285eafde6b5544519238bb8040dc08e3']}   >
<p custom-agua-item="text" className={styles['text-27623-971cb485faa942e49caa0c3a97a0dc83']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/towers")}>Towers</p>
<p custom-agua-item="text" className={styles['text-27723-1172e135dca24c269825cfffc37fce52']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/towers")}>Windmills</p>
</section>
<section custom-agua-item="layer" className={styles['layer-28233-e85273f6ce7943ee8c3fea646cc25bce']}   >
<p custom-agua-item="text" className={styles['text-27633-828ef2ea42b94b7c851529ee8e5626b8']}   onClick={() => openInNewTab("https://www.airbnb.com/stays/luxury")}>Luxe</p>
</section>
</section>
</section>
</section>
<section custom-agua-item="layer" className={styles.homefootershared}   >
<section custom-agua-item="layer" className={`${styles['layer-213-6be24c0bb0064bb6a88a32abbac66514-orientation']} ${styles['layer-213-6be24c0bb0064bb6a88a32abbac66514']}`}   >
<section custom-agua-item="layer" className={styles['layer-215-440097adf19b49fe8321cd4c99852599']}   >
<p custom-agua-item="text" className={styles['text-170-b3445468b0fc4613bccbea4d1a55b550']}   >Support</p>
<p custom-agua-item="text" className={styles['text-171-67e4e7710f1049828b67d1fefc28032d']}   onClick={() => openInNewTab("https://www.airbnb.com/help/home")}>Help Center</p>
<p custom-agua-item="text" className={styles['text-172-54e6e98dc03a4bef9c3e8ea42368663f']}   onClick={() => openInNewTab("https://www.airbnb.com/aircover")}>AirCover</p>
<p custom-agua-item="text" className={styles['text-173-28833623ad7b48289f05eed23342cacd']}   onClick={() => openInNewTab("https://www.airbnb.com/against-discrimination")}>Anti-discrimination
</p>
<p custom-agua-item="text" className={styles['text-174-4fda4799ce684e2eaddd87ee6be0732b']}   onClick={() => openInNewTab("https://www.airbnb.com/accessibility")}>Disability support
</p>
<p custom-agua-item="text" className={styles['text-175-99b35fe8b6dd422fa763d9db299fa539']}   onClick={() => openInNewTab("https://www.airbnb.com/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19")}>Cancellation options
</p>
<p custom-agua-item="text" className={styles['text-176-fc8c04f6dbf5499a8f3690373a20170b']}   onClick={() => openInNewTab("https://www.airbnb.com/neighbors")}>Report neighborhood concern</p>
</section>
<section custom-agua-item="layer" className={styles['layer-216-1bf446f3816c454f9f99c313f5c6c325']}   >
<p custom-agua-item="text" className={styles['text-177-b37681cc5d25469aaae425e20d809d34']}   >Hosting</p>
<p custom-agua-item="text" className={styles['text-178-f7717c577be04ef8b5109dae18fbd87d']}   onClick={() => openInNewTab("https://www.airbnb.com/host/homes")}>Airbnb your home
</p>
<p custom-agua-item="text" className={styles['text-179-68e6e8dbe87c43158d99b0f8e9adf142']}   onClick={() => openInNewTab("https://www.airbnb.com/aircover-for-hosts")}>AirCover for Hosts
</p>
<p custom-agua-item="text" className={styles['text-180-7d24fa72ed7c4196a2e0228e6ad2d25c']}   onClick={() => openInNewTab("https://www.airbnb.com/resources")}>Hosting resources
</p>
<p custom-agua-item="text" className={styles['text-181-591607704f034c9695d2f23f5a3da6d1']}   onClick={() => openInNewTab("https://www.airbnb.com/help/community")}>Community forum
</p>
<p custom-agua-item="text" className={styles['text-182-04d40566f99744bea766caa0616bdb59']}   onClick={() => openInNewTab("https://www.airbnb.com/help/responsible-hosting")}>Hosting responsibly
</p>
<p custom-agua-item="text" className={styles['text-183-16b4396c19b7477c88c15bbaeb21195c']}   onClick={() => openInNewTab("https://www.airbnb.com/airbnb-friendly")}>Airbnb-friendly apartments
</p>
</section>
<section custom-agua-item="layer" className={styles['layer-217-ffb96241f77243d0b4fc27cdebdb00ea']}   >
<p custom-agua-item="text" className={styles['text-184-28e7d5f569d54a11a7e5d4fd8dd9e264']}   >Airbnb</p>
<p custom-agua-item="text" className={styles['text-185-fa7703600246466594c14a330f7017da']}   onClick={() => openInNewTab("https://www.airbnb.com/press/news")}>Newsroom
</p>
<p custom-agua-item="text" className={styles['text-186-6b9592b86bc542dbb409de335d74b4e4']}   onClick={() => openInNewTab("https://www.airbnb.com/release")}>New features
</p>
<p custom-agua-item="text" className={styles['text-187-26c39c8832f9407caab271a9be28fbaa']}   onClick={() => openInNewTab("https://www.airbnb.com/careers")}>Careers</p>
<p custom-agua-item="text" className={styles['text-188-c144e9c3a2f34876a6f0befec46fead7']}   onClick={() => openInNewTab("https://investors.airbnb.com/")}>Investors</p>
<p custom-agua-item="text" className={styles['text-189-7478177a90b145559f73e5ea7b3ee5c2']}   onClick={() => openInNewTab("https://www.airbnb.com/giftcards")}>Gift cards
</p>
<p custom-agua-item="text" className={styles['text-190-2cd3a197b6c94c67b98ba9533a6426d6']}   onClick={() => openInNewTab("https://www.airbnb.org/")}>Airbnb.org emergency stays
</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-214-cd296d83cfef44df89d2f98ec73fdde4']}   >
<section custom-agua-item="layer" className={styles['layer-466-0ddd1ba13dcc44809373b19b07580396']}   >
<section custom-agua-item="layer" className={styles['layer-4612-8a555c6a292541b881ed5a6a6a9afcd9']}   >
<span custom-agua-item="icon" className={styles['icon-2062-5b5156ae69c248ec8712be72def06e58']}  >language</span>
<p custom-agua-item="text" className={styles['text-5202-8c628332d27842f08785a589f09857c2']}   >English (US)</p>
<p custom-agua-item="text" className={styles['text-5212-3357c4bd82c842259a4b9c80e7e0688b']}   >$USD</p>
<section custom-agua-item="layer" className={styles['layer-4632-8bb434cd142e465093a56c26b52f404d']}   >
<img custom-agua-item="imageView" className={styles['imageview-112-f0baacdd660342aea0d4bf01746e3924']}  alt="imageview-112" src={ image_imageview_112}  onClick={() => openInNewTab("https://www.facebook.com/airbnb")}/>
<img custom-agua-item="imageView" className={styles['imageview-122-b8a95034c59148f69447ba66f2a9baea']}  alt="imageview-122" src={ image_imageview_122}  onClick={() => openInNewTab("https://twitter.com/airbnb")}/>
<img custom-agua-item="imageView" className={styles['imageview-132-77794b9a0e774831bb9e47673d7f083c']}  alt="imageview-132" src={ image_imageview_132}  onClick={() => openInNewTab("https://instagram.com/airbnb")}/>
</section>
</section>
</section>
<section custom-agua-item="layer" className={`${styles['layer-465-48d01d18d03b4df1849b4a659ab9fe04-orientation']} ${styles['layer-465-48d01d18d03b4df1849b4a659ab9fe04']}`}   >
<section custom-agua-item="layer" className={`${styles['layer-460-5d86b29940f943e6bb1702172fcc7e32-orientation']} ${styles['layer-460-5d86b29940f943e6bb1702172fcc7e32']}`}   >
<p custom-agua-item="text" className={styles['text-515-81e79fdd8a8c4dabb52eb545139877c2']}   >© 2024 Airbnb, Inc.</p>
<section custom-agua-item="layer" className={`${styles['layer-464-4e20ec68faa44addb9de6f4a659c0405-orientation']} ${styles['layer-464-4e20ec68faa44addb9de6f4a659c0405']}`}   >
<section custom-agua-item="layer" className={`${styles['layer-462-4d379f86be3340d7bea38b46abb6b26c-orientation']} ${styles['layer-462-4d379f86be3340d7bea38b46abb6b26c']}`}   >
<p custom-agua-item="text" className={styles['text-516-3667e38ff0494df79499215ed17e83b5']}   onClick={() => openInNewTab("https://www.airbnb.com/terms")}>Terms</p>
<p custom-agua-item="text" className={styles['text-517-ed49dc0edbe74d11a44a7a8194d50e34']}   onClick={() => openInNewTab("https://www.airbnb.com/sitemaps/v2")}>Sitemap</p>
<p custom-agua-item="text" className={styles['text-518-b7a2a97516d6429584f9271a6f004e6d']}   onClick={() => openInNewTab("https://www.airbnb.com/terms/privacy_policy")}>Privacy</p>
</section>
<p custom-agua-item="text" className={styles['text-519-a19ab795c8224a5ebd5bd57b730463d0']}   >Your Privacy Choices</p>
</section>
</section>
<section custom-agua-item="layer" className={styles['layer-461-10437ef33f94414d9e79df52f2c614cf']}   >
<span custom-agua-item="icon" className={styles['icon-206-62d7956483b747f08add7414568346a4']}  >language</span>
<p custom-agua-item="text" className={styles['text-520-01cee3d168b54931ac90538fe257b3d2']}   >English (US)</p>
<p custom-agua-item="text" className={styles['text-521-2fc232faf28a42ac940a26c0df14287f']}   >$USD</p>
<section custom-agua-item="layer" className={styles['layer-463-7fed61b09db54a8e8889f481a72dca79']}   >
<img custom-agua-item="imageView" className={styles['imageview-11-1bcb4cd8534147e99d8fc0fbbdae47fc']}  alt="imageview-11" src={ image_imageview_11}  onClick={() => openInNewTab("https://www.facebook.com/airbnb")}/>
<img custom-agua-item="imageView" className={styles['imageview-12-174e869c8dae444aae00248f5b03e7fd']}  alt="imageview-12" src={ image_imageview_12}  onClick={() => openInNewTab("https://twitter.com/airbnb")}/>
<img custom-agua-item="imageView" className={styles['imageview-13-fec44917293049aba8e78cc38c8d6588']}  alt="imageview-13" src={ image_imageview_13}  onClick={() => openInNewTab("https://instagram.com/airbnb")}/>
</section>
</section>
</section>
</section>
</section>
</section>
<section custom-agua-item="layer" className={styles.homemobilemenu}   >
<section custom-agua-item="layer" className={styles['layer-13-1d6c19bf9aa24d7b978ea09023f24196']}   >
<span custom-agua-item="icon" className={styles['icon-1-f9f6e6b394a44e6d80dd5fefb5a2d596']}  >search</span>
<p custom-agua-item="text" className={styles['text-5-42b265e9d2bb40399dc5e983a6015fd5']}   >Explore</p>
</section>
<section custom-agua-item="layer" className={styles['layer-14-d35614bd3d6e4b63a5e788dccdfdf421']}   >
<span custom-agua-item="icon" className={styles['icon-2-d3d41df8212f49de9bc6dabfa88349a9']}  >favorite</span>
<p custom-agua-item="text" className={styles['text-6-b4fb883a329c4e01ba0fab348b16a051']}   >Wishlist</p>
</section>
<section custom-agua-item="layer" className={styles['layer-15-433af61ffeec4533a6b34fd36e73cc32']}   >
<span custom-agua-item="icon" className={styles['icon-3-dd7d9c27099e4a9d94ba916e05a1c5c7']}  >person_outline</span>
<p custom-agua-item="text" className={styles['text-7-128f82a0b83e4983a18afe8089412680']}   >Log In</p>
</section>
</section>

            </main>
        );
    };

    return aguaRender();
}

export default Home;
            