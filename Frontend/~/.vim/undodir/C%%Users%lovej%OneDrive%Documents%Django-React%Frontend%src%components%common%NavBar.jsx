Vim�UnDo� ��t���E ����#�s�1���ԿV�i�Vy�   V  "        className={`text-white text-xl relative before:content-[attr(data-count)] before:absolute before:-top-2 before:-right-3  before:w-[16px] before:h-[16px] before:flex before:justify-center before:items-center before:rounded-[50%] before:bg-red-500 before:text-white before:text-xs`} >   6                          d*�    _�                    D   /    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    d*�     �   C   E   U      B            <li className="p-2" onClick={() => setSidebar(false)}>5��    C   /                  �
                     5�_�                    D   /    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    d*�     �   C   E   U      1            <li className="p-2" onClick={() => }>5��    C   /                  �
                     �    C   3                 �
                    �    C   /                 �
                    �    C   /                 �
                    �    C   /                 �
                    5�_�                    D   <    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    d*�!     �   C   E   U      >            <li className="p-2" onClick={() => sidebarToggle}>5��    C   <                  �
                     5�_�                    G   /    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    d*�%     �   F   H   U      B            <li className="p-2" onClick={() => setSidebar(false)}>5��    F   /                  ?                     5�_�                    G   /    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    d*�&     �   F   H   U      1            <li className="p-2" onClick={() => }>5��    F   /                  ?                     �    F   /                 ?                    �    F   /                 ?                    �    F   /                 ?                    5�_�                    G   <    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    d*�(     �   F   H   U      >            <li className="p-2" onClick={() => sidebarToggle}>5��    F   <                  L                     5�_�      	              G   <    ����                                                                                                                                                                                                                                                                                                                                         *       v   *    d*�*    �   	      U      J  const { authCompleted, username } = useSelector((state) => state?.auth);�   
      U      2  const cart = useSelector((state) => state?.cart)�         U      !  const dispatch = useDispatch();�         U      /  const [sidebar, setSidebar] = useState(false)�         U        const logOutUser = () => {�         U          dispatch(clearCart())�         U          dispatch(logout());�         U        };�         U        const sidebarToggle = () => {�         U          setSidebar(!sidebar)�         U      9    if (!sidebar) document.body.style.overflow = "hidden"�         U      /    else document.body.style.overflow = "unset"�         U        }�         U      
  return (�         U      L    <nav className="bg-[#121212] h-12 w-full flex justify-between p-2 px-4">�         U      B      <div className="flex items-center justify-center md:hidden">�         U      �        <HiBars3BottomLeft className={`${sidebar ? "text-black" : "text-white"} text-2xl z-20`} onClick={() => sidebarToggle()} />�         U            </div>�          U      [      <ul className="hidden md:flex justify-center items-center gap-20 text-white text-xl">�      !   U              <li className="p-2">�       "   U      (          <NavLink to="/">Home</NavLink>�   !   #   U              </li>�   "   $   U              <li className="p-2">�   #   %   U                {authCompleted ? (�   $   &   U      :            <NavLink onClick={logOutUser}>LogOut</NavLink>�   %   '   U                ) : (�   &   (   U      0            <NavLink to="/login">Login</NavLink>�   '   )   U                )}�   (   *   U              </li>�   )   +   U              {/*�   1   3   U            </ul>�   2   4   U      9      <div className="flex items-center justify-center ">�   3   5   U      3        <div className="flex gap-10 items-center ">�   4   6   U     c          <div data-count={cart.totalItems ? `${cart.totalItems}` : "0"} className={`text-white text-xl relative before:content-[attr(data-count)] before:absolute before:-top-2 before:-right-3  before:w-[16px] before:h-[16px] before:flex before:justify-center before:items-center before:rounded-[50%] before:bg-red-500 before:text-white before:text-xs`} >�   5   7   U      !            <Link to="/checkout">�   6   8   U                     <FaShoppingCart />�   7   9   U                  </Link>�   8   :   U                </div>�   9   ;   U                {authCompleted ? (�   :   <   U      K            <h2 className="text-white text-lg uppercase font-semibold p-2">�   ;   =   U                    {username}�   <   >   U                  </h2>�   =   ?   U                ) : null}�   >   @   U              </div>�   ?   A   U            </div>�   @   B   U            {sidebar ? (�   A   C   U      x        <div className="h-screen w-full overflow-hidden fixed left-0 top-0 bg-red-500 flex items-center justify-center">�   B   D   U      %          <ul className="text-white">�   C   E   U      @            <li className="p-2" onClick={() => sidebarToggle()}>�   D   F   U      ,              <NavLink to="/">Home</NavLink>�   E   G   U                  </li>�   F   H   U      @            <li className="p-2" onClick={() => sidebarToggle()}>�   G   I   U                     {authCompleted ? (�   H   J   U      >                <NavLink onClick={logOutUser}>LogOut</NavLink>�   I   K   U                    ) : (�   J   L   U      4                <NavLink to="/login">Login</NavLink>�   K   M   U                    )}�   L   N   U                  </li>�   M   O   U                </ul>�   N   P   U              </div>�   O   Q   U            ) : null}�   P   R   U      
    </nav>�   Q   S   U        );5��    Q                     W                    �    P                     L                    �    O                     <                    �    N                     -                    �    M           
                
              �    L                                         �    K                     �                    �    J                      �                     �    I                     �                    �    H                      r                     �    G                     Q                    �    F                                         �    E                     �
                    �    D                     �
                    �    C                     �
                    �    B           
          j
      
              �    A                     �	                    �    @                     �	                    �    ?                     �	                    �    >                     �	                    �    =           
          �	      
              �    <                     �	                    �    ;                     �	                    �    :                     7	                    �    9           
          	      
              �    8           
          		      
              �    7                     �                    �    6                     �                    �    5                     �                    �    4           
          N      
              �    3                                         �    2                     �                    �    1                     �                    �    )                     �                    �    (                     �                    �    '           
          �      
              �    &                     �                    �    %           
          �      
              �    $                     b                    �    #           
          E      
              �    "                     (                    �    !                                         �                
          �      
              �                         �                    �                         x                    �                         k                    �                         �                    �                         �                    �                         X                    �                         M                    �                         H                    �                                             �                         �                    �                         �                    �                         �                    �                         �                    �                         �                    �                         m                    �                         P                    �                                             �                         �                    �    
                     �                    �    	                                         5�_�      
           	   5   R    ����                                                                                                                                                                                                                                                                                                                                                             d*�     �   4   7   U     m                    <div data-count={cart.totalItems ? `${cart.totalItems}` : "0"} className={`text-white text-xl relative before:content-[attr(data-count)] before:absolute before:-top-2 before:-right-3  before:w-[16px] before:h-[16px] before:flex before:justify-center before:items-center before:rounded-[50%] before:bg-red-500 before:text-white before:text-xs`} >5��    4   R                `                    �    5                     a                    5�_�   	              
   6       ����                                                                                                                                                                                                                                                                                                                                                             d*�     �   5   7   V     "        className={`text-white text-xl relative before:content-[attr(data-count)] before:absolute before:-top-2 before:-right-3  before:w-[16px] before:h-[16px] before:flex before:justify-center before:items-center before:rounded-[50%] before:bg-red-500 before:text-white before:text-xs`} >5��    5                     h                     5�_�   
                  6       ����                                                                                                                                                                                                                                                                                                                                                             d*�    �   5   7   V     3                         className={`text-white text-xl relative before:content-[attr(data-count)] before:absolute before:-top-2 before:-right-3  before:w-[16px] before:h-[16px] before:flex before:justify-center before:items-center before:rounded-[50%] before:bg-red-500 before:text-white before:text-xs`} >5��    5                     a                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       d*��     �         U        const sidebarToggle = () => {5��                         �                     �                         �                     5��