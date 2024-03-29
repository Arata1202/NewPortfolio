import { EnvelopeIcon, PhoneIcon, ChevronDownIcon, PencilIcon, DocumentMagnifyingGlassIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon, CheckCircleIcon, ExclamationTriangleIcon, PencilSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-scroll';
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import emailjs from 'emailjs-com';

import { frontend, backend, tools } from '../Components/Skills'
import { footerNavigation } from '../Components/FooterNav'
import { settings } from '../Components/Slick'
import { interns, features } from '../Components/Activities'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

export default function TopPage() {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerStyle, setHeaderStyle] = useState({
    transform: 'translateY(0)',
    transition: 'transform 0.3s',
  });

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < 30) {
        setHeaderStyle({
          transform: 'translateY(0)',
          transition: 'transform 0.3s',
        });
      } else if (window.scrollY > lastScrollY) {
        setHeaderStyle({
          transform: 'translateY(-100%)', 
          transition: 'transform 0.3s',
        });
      } else {
        setHeaderStyle({
          transform: 'translateY(0)',
          transition: 'transform 0.3s',
        });
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  const [show, setContactConfirmShow] = useState(false)
  const cancelButtonRef = useRef(null)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  //バリデーション
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  interface FormData {
    sei: string;
    mei: string;
    email: string;
    company: string;
    tel: string;
    message: string;
  }

  const [formData, setContactFormData] = useState<FormData | null>(null);
  const [open, setContactDialogOpen] = useState(false);

  const onSubmit = (data: FormData) => {
    setContactFormData(data);
    setContactDialogOpen(true);
  };

  const sendEmail = () => {
    if (!formData) return;
    const formDataAsRecord: Record<string, unknown> = {
      sei: formData.sei,
      mei: formData.mei,
      email: formData.email,
      company: formData.company,
      tel: formData.tel,
      message: formData.message,
    };

    emailjs.send(process.env.REACT_APP_CONTACT_SERVICE_ID as string, process.env.REACT_APP_CONTACT_TEMPLATE_ID as string, formDataAsRecord, process.env.REACT_APP_CONTACT_USER_ID as string)
      .then((result) => {
        console.log('送信できた!', result.text);
        setContactConfirmShow(true);
        reset();
      }, (error) => {
        console.log('Failed to send email:', error.text);
        setContactConfirmShow(false);
      }).finally(() => {
        setContactDialogOpen(false);
      });
  };

  const handleConfirmSend = () => {
    sendEmail();
  };
  const handleCancel = () => {
    setContactDialogOpen(false);
  };
  

  return (

    // ナビゲーション

    <div className="bg-gray-800">
        <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-gray-800" style={{...headerStyle, boxShadow: '0 8px 12px -4px rgba(255, 255, 255, 0.1), 0 4px 8px -4px rgba(255, 255, 255, 0.06)'}}>
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div>
                <a onClick={scrollToTop}>
                {/* <h2 className='text-white text-4xl'>Real Portfolio</h2> */}
                <img src="images/リアルポートフォリオ.png" alt="トップページへ" loading="lazy" className='md:w-1/2 lg:w-3/7 ml-2' />
                </a>
              </div>
              <div className="flex items-center px-2 lg:px-0">
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <button onClick={scrollToTop} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Home
                    </button>
                    <Link to="Activities" smooth={true} duration={500} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Activities
                    </Link>
                    <Link to="Internship" smooth={true} duration={500} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Internship
                    </Link>
                    <Link to="Service" smooth={true} duration={500} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Services
                    </Link>
                    <Link to="Skills" smooth={true} duration={500} className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Skills
                    </Link>
                    <Link to="Contact" smooth={true} duration={500} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel as="nav" className="fixed top-16 w-full z-40 bg-gray-800" style={{...headerStyle, boxShadow: '0 8px 12px -4px rgba(255, 255, 255, 0.1), 0 4px 8px -4px rgba(255, 255, 255, 0.06)'}}>
            <div className="space-y-1 px-2 pb-3 pt-1">
              <button
                onClick={() => {
                  scrollToTop();
                  close();
                }}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </button>
              <Link
                to="Activities"
                smooth={true}
                duration={500}
                onClick={() => close()}
                className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Activities
              </Link>
              <Link
                to="Internship"
                smooth={true}
                duration={500}
                onClick={() => close()}
                className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Internship
              </Link>
              <Link
                to="Service"
                smooth={true}
                duration={500}
                onClick={() => close()}
                className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Services
              </Link>
              <Link
                to="Skills"
                smooth={true}
                duration={500}
                onClick={() => close()}
                className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Skills
              </Link>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                onClick={() => close()}
                className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    {/* トップ */}

      <div className='pt-10 mt-5 flex'>
        <img src="/images/engel.jpg" alt="description" loading="lazy" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-40 sm:w-40" src="/images/face.jpg" alt="" loading="lazy" />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-3xl font-bold text-white">Arata Takano</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              target='brank'
              href="https://github.com/Arata1202"
              className="inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              <FaGithub className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              target='blank'
              href={process.env.REACT_APP_MY_BLOG_URL}
              className="inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              <DocumentMagnifyingGlassIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>Blog</span>
            </a>
            <a
              href={`mailto:${process.env.REACT_APP_MY_EMAIL_ADDRESS}`}
              className="inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>E-mail</span>
            </a>
            </div>
          </div>
        </div>
        <div className='mt-10 text-white'>
              <p>
              千葉県在住の20歳（2003年4月20日生まれ）。
              2023年7月からプログラミングを独学し、１ヶ月でPHPを習得。
              同年10月からはエンジニアのインターンシップに参加し、日々スキルアップを図っています。
              同年の8月には、大学生活やプログラミングに関するブログを開始しました。
              大学で学んでいるマーケティングスキルを活かして、人々のニーズやSEOを考えながら記事を執筆しています。
              よろしくお願いします。
              </p>
            </div>
      </div>

      {/* アピールエリア */}

      <div className="py-0 sm:py-0 bg-gray-800">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div>
          <Slider {...settings}>
            <div className="relative w-full">
              <img
                src="/images/Trip/2.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/1.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/4.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div> 
          </Slider>
          <div className="group relative mt-8">
              <h2 className="text-2xl font-semibold leading-6 text-white">
                  旅行
              </h2>
              <p className="mt-5 text-sm leading-6 text-white">旅行が好きで何度も温泉地や観光スポットへ行きました。思い出ができるだけでなく、土地勘や計画性の向上、コスト管理能力の上昇など得られるメリットも大きかったです。</p>
              <div className="mt-5 flex flex-wrap">
                <span className="mt-1 bg-blue-700 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">温泉</span>
                <span className="mt-1 bg-green-700 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">観光</span>
              </div>
            </div>
          </div>
          <div>
          <Slider {...settings}>
            <div className="relative w-full">
              <img
                src="/images/Trip/3.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/5.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/8.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
          </Slider>
          <div className="group relative mt-8">
              <h2 className="text-2xl font-semibold leading-6 text-white">
                  ドライブ
              </h2>
              <p className="mt-5 text-sm leading-6 text-white">レンタカーなどを使ってドライブすることも好きです。またドライブだけでなく、新幹線や飛行機に乗ってのんびり旅をすることも好きです。</p>
              <div className="mt-5 flex flex-wrap">
                <span className="mt-1 bg-red-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">新幹線</span>
                <span className="mt-1 bg-purple-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">飛行機</span>
              </div>
            </div>
          </div>
          <div>
          <Slider {...settings}>
            <div className="relative w-full">
              <img
                src="/images/Trip/desk1.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/desk2.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/desk3.jpg"
                alt="画像"
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div> 
          </Slider>
            <div className="group relative mt-8">
              <h2 className="text-2xl font-semibold leading-6 text-white">
                    ゲーム
              </h2>
              <p className="mt-5 text-sm leading-6 text-white">暇な日は自宅でゲームを楽しんでいます。また部屋をカスタマイズすることも好きで、そのおかげでプログラミングも捗っています。</p>
              <div className="mt-5 flex flex-wrap">
                <span className="mt-1 bg-indigo-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">PC</span>
                <span className="mt-1 bg-yellow-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Switch</span>
              </div>

            </div>
            </div>
        </div>
        <hr className="border-b border-8 border-dashed border-gray-700 mt-20" />
      </div>
    </div>

    {/* 経験 */}
    <div id="Activities" className="bg-gray-800 py-10 sm:py-10 mt-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl mb-20 text-center">Activities</h2>
        <div className="mx-auto mt-16 max-w-none lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="font-semibold leading-7 text-white text-2xl">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                マーケティング研究
              </dt>
              <dd className="mt-5 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto text-white">大学のゼミナールでは、企業の成長性や弱点を分析し、その将来性についてディベートを主に行いました。また、他大学と競うディベート大会にも参加しました。企業分析のスキルに加え、ディベートを通じて話術も磨くことができました。</p>
              </dd>
              <div className="mt-5 flex flex-wrap">
                <span className="mt-1 bg-pink-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">企業分析</span>
                <span className="mt-1 bg-indigo-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">ディベート</span>
              </div>
            </div>
            <div className="flex flex-col">
              <dt className="font-semibold leading-7 text-white text-2xl">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <PencilSquareIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                ブログ運営
              </dt>
              <dd className="mt-5 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto text-white">WordPressを利用して、大学生活やプログラミングに関するブログを運営しています。大学生時代に感じた不安やその解決策を他の学生に共有したいと考え、始めました。またブログを通じてライティングスキルやSEOに関する知識も身につけることができました。</p>
              </dd>
              <div className="mt-5 flex flex-wrap">
                <span className="mt-1 bg-yellow-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">ブログ</span>
                <span className="mt-1 bg-red-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">SEO</span>
              </div>
            </div>
            <div className="flex flex-col">
              <dt className="font-semibold leading-7 text-white text-2xl">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CodeBracketSquareIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                プログラミング学習
              </dt>
              <dd className="mt-5 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto text-white">友人に勧められたことをきっかけに、独学でプログラミング学習を開始しました。私の長所である集中力を活かして勉強に励み、僅か１ヶ月でPHPを習得。その後はDjangoでポートフォリオを作成し、エンジニアインターンシップに応募しました。</p>
              </dd>
              <div className="mt-5 flex flex-wrap">
                <span className="mt-1 bg-purple-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">PHP</span>
                <span className="mt-1 bg-green-800 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Django</span>
              </div>
            </div>
          </dl>
          {/* <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
            {interns.map((intern) => (
              <div key={intern.name} className="flex flex-col mt-20">
                <dt className="font-semibold leading-7 text-white text-2xl">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <intern.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {intern.name}
                </dt>
                <dd className="mt-5 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-white">{intern.description}</p>
                </dd>
                <dd className="mt-5 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-white text-1xl text-bold">{intern.description_2}</p>
                </dd>
              </div>
            ))}
          </dl>
              <p className='text-white'>
                インターン応募の際には、Trip Pulse X（後述）とDjangoをAWS EC2にデプロイしたポートフォリオ（FirstPortfolio）を制作しました。
              </p>
          <div className="mt-10 flex">
          <a
              target='brank'
              href="https://portfolio.aratasportfolio.com/portfolio.html"
              className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              FirstPortfolio
          </a>
          <a
              target='branck'
              href="https://github.com/Arata1202/FirstPortfolio"
              className="ml-5 inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              <FaGithub className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>GitHub</span>
          </a>
          </div> */}
        </div>
      <hr className="border-b border-8 border-dashed border-gray-700 mt-20" />
      </div>
    </div>

    {/* インターン */}
    <div id="Internship" className="bg-gray-800 py-10 sm:py-10 mt-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl mb-20 text-center">Internship</h2>
        <div className="mx-auto mt-16 max-w-none lg:mt-24">
        <div className="mx-auto">
            <article className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[13/9] sm:aspect-[13/9] lg:w-80 lg:shrink-0">
                  <img
                    src="/images/カレンダー.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="">
                  <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">
                    日報管理ツール
                  </h1>
                  <p className='mb-2 mt-2 text-white'>取り組み日：2023年11月 〜</p>
                  <div className="flex flex-wrap">
                    <span className="mt-1 bg-red-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Laravel</span>
                    <span className="mt-1 bg-blue-400 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Vuetify</span>
                    <span className="mt-1 bg-green-700 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Vue.js</span>
                    <span className="mt-1 bg-indigo-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Tailwind CSS</span>
                    <span className="mt-1 bg-orange-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">AWS ECS</span>
                  </div>
                    <p className="mt-3 leading-6 text-white">
                    訪問看護を提供する企業向けに、ゼロから共同で日報管理ツールを開発しました。
                    管理者と一般社員でアクセスできる情報には差があります。
                    このツールの主要機能には、顧客とスタッフのデータを一元管理する機能、これらのデータや日付、休日、雇用形態などを管理するためのマスタ画面の作成、訪問履歴やキャンセル者の入力画面、単価計算、およびレポート生成機能などが含まれています。
                    初めはVue.jsで開発していましたが、途中でVuetifyに移行しました。
                    
                    </p>
                  </div>
                </div>
              </article>
              </div>
        <div className="mt-10 mx-auto">
            <article className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[13/9] sm:aspect-[13/9] lg:w-80 lg:shrink-0">
                  <img
                    src="/images/ブログ.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                <div className="">
                  <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">
                    CMS
                  </h1>
                  <p className='mb-2 mt-2 text-white'>取り組み日：2023年11月 〜</p>
                  <div className="flex flex-wrap">
                    <span className="mt-1 bg-red-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Laravel</span>
                    <span className="mt-1 bg-green-700 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Vue.js</span>
                    <span className="mt-1 bg-blue-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
                    <span className="mt-1 bg-orange-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">AWS ECS</span>
                  </div>
                    <p className="mt-5 leading-6 text-white">
                    ハウコレが運営する5つのメディアサイト向けのCMSを共同で開発しています。私の主な業務は、ボタンやアフィリエイトタグなどの挿入機能を提供するプラグインのリファクタリングと、新たなメディアサイト用のCMS機能の開発です。
                    このCMSは私がインターンシップを開始した時には既に構築されており、現在はそのアップデートや機能改善に取り組んでいます。
                    </p>
                  </div>
                </div>
              </article>
              </div>
        </div>
      <hr className="border-b border-8 border-dashed border-gray-700 mt-20" />
      </div>
    </div>


    {/* サービス */}

    <div id='Service' className="bg-gray-800 py-10 sm:py-10">
    <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">Services</h2>
        </div>
    </div>
    <div className="bg-gray-800 py-0 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">Trip Pulse X</h1>
          <div className="mt-5 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-1">
            <div>
              <p>
                ※ インターンシップ応募前に作成｜2023年 8月 〜 9月
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-5 lg:pt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                className="mb-[-1%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                src="images/Services/travel.jpg"
                loading="lazy"
                alt="画像"
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-700 pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap">
            <span className="mt-1 bg-orange-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
            <span className="mt-1 bg-blue-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
            <span className="mt-1 bg-purple-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">PHP</span>
            <span className="mt-1 bg-yellow-300 text-gray-800 font-semibold mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
            <span className="mt-1 bg-blue-800 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">jQuery</span>
            <span className="mt-1 bg-blue-600 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">MySQL</span>
            <span className="mt-1 bg-gray-500 text-white font-semibold px-2.5 py-0.5 rounded">FTP</span>
          </div>
          <div className="mt-5 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-1">
            <div>
              <p>
                旅行が好きなので、
                旅行好きユーザーが旅行に関する情報のみを共有するアプリケーションを開発しました。
                都道府県名や観光地名による検索や投稿機能だけでなく、コメント機能でコミュニケーションを取ることも出来ます。
                またAjaxによるいいね機能なども実装しており、リアルタイムでいいね数を取得することなども出来ます。
                JavaScriptによるバリデーションチェックや、投稿内容・ユーザー情報のCRUD機能など、細部まで拘って実装しています。
              </p>
              <br />
              <p>
                メールアドレス：guest@guest.com, &nbsp;パスワード：Guest123 でログイン可能です。
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
          <a
              target='brank'
              href="https://sns.aratasportfolio.com/Pages/Auth/login-1.php"
              className="inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              <RocketLaunchIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>Trip Pulse X</span>
          </a>
          <a
              target='branck'
              href="https://github.com/Arata1202/TripPulseSNS"
              className="ml-5 inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              <FaGithub className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>GitHub</span>
          </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">Portfolio</h1>
          <div className="mt-5 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-1">
            <div>
                <p>
                  ※ インターンシップ参加後に作成｜2024年 3月 〜
                </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-5 lg:pt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                className="mb-[-1%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                src="images/Services/portfolio.jpg"
                alt="画像"
                loading="lazy"
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-700 pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap">
            <span className="mt-1 bg-blue-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">TypeScript</span>
            <span className="mt-1 bg-blue-700 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">React.js</span>
            <span className="mt-1 bg-indigo-500 text-white font-semibold mr-2 px-2.5 py-0.5 rounded">Tailwind CSS</span>
            <span className="mt-1 bg-orange-600 text-white font-semibold px-2.5 py-0.5 rounded">AWS Amplify</span>
          </div>
          <div className="mt-5 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-1">
            <div>
              <p>
              React.js, TypeScriptの学習も兼ねてこのポートフォリオを作成しました。
              CSSにはTailwindCSSを採用しており、デザインへの拘りや管理のしやすさにも気を遣っています。
              また、PageSpeedInsightによるパフォーマンスの分析を行い、最適化も行いました。
              デプロイ先にはAWS Amplifyを採用しました。
              サーバー側の管理が不要で、GitHubのリポジトリ管理だけで済むため、大変便利に感じています。
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            {/* <a
              href="PortfolioPage"
              className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              Read More
            </a> */}
            <a
              target='branck'
              href="https://github.com/Arata1202/NewPortfolio"
              className="inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              <FaGithub className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>GitHub</span>
          </a>
          </div>
        </div>
        <hr className="border-b border-8 border-dashed border-gray-700 mt-20" />
      </div>
    </div>

    {/* スキル */}
    <div id="Skills" className="bg-gray-800 py-10 sm:py-10">
    <div className="mx-auto max-w-7xl text-center px-6 lg:px-8">
        <div>
          <h2 className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">Skills</h2>
        </div>
        <div className="ml-7">
            <h2 className="mt-6 text-left text-3xl font-bold tracking-tight text-white sm:text-3xl">Frontend</h2>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-17 m-6">
            {frontend.map((skill, index) => (
                <li key={index} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                    <div className="flex flex-1 flex-col p-3 bg-gray-700">
                        <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={skill.imageUrl} alt="画像" loading="lazy" />
                        <h3 className="mt-2 mb-1 text-sm font-medium text-white text-lg">{skill.name}</h3>
                        <p className="text-sm text-white text-left">{skill.title}</p>
                    </div>
                </li>
            ))}
        </ul>
        <div className="ml-7">
            <h2 className="mt-12 text-left text-3xl font-bold tracking-tight text-white sm:text-3xl">Backend</h2>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-17 m-6">
            {backend.map((skill, index) => (
                <li key={index} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                    <div className="flex flex-1 flex-col p-3 bg-gray-700">
                        <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={skill.imageUrl} alt="画像" loading="lazy" />
                        <h3 className="mt-2 mb-1 text-sm font-medium text-white text-lg">{skill.name}</h3>
                        <p className="text-sm text-white text-left">{skill.title}</p>
                    </div>
                </li>
            ))}
        </ul>
        <div className="ml-7">
            <h2 className="mt-12 text-left text-3xl font-bold tracking-tight text-white sm:text-3xl">Tools</h2>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-17 m-6">
            {tools.map((skill, index) => (
                <li key={index} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                    <div className="flex flex-1 flex-col p-3 bg-gray-700">
                        <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={skill.imageUrl} alt="画像" loading="lazy" />
                        <h3 className="mt-2 mb-1 text-sm font-medium text-white text-lg">{skill.name}</h3>
                        <p className="text-sm text-white text-left">{skill.title}</p>
                    </div>
                </li>
            ))}
        </ul>
        <hr className="border-b border-8 border-dashed border-gray-700 mt-20" />
    </div>
    </div>

    {/* 問い合わせ */}

    <div id="Contact" className="bg-gray-800 py-10 sm:py-10">
    <div className="mx-auto max-w-7xl text-center px-6 lg:px-8">
      <div>
        <h2 className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact</h2>
      </div>
      <form  onSubmit={handleSubmit(onSubmit)} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              姓
            </label>
            <div className="mt-2.5">
              <input
                placeholder='山田'
                {...register("sei", { required: "※ 姓を入力してください" })}
                type="text"
                name="sei"
                id="sei"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-3 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              />
              {errors.sei && <p className="text-red-500">{errors.sei.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              名
            </label>
            <div className="mt-2.5">
              <input
                placeholder='太郎'
                {...register("mei", { required: "※ 名を入力してください" })}
                type="text"
                name="mei"
                id="mei"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-3 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              />
              {errors.mei && <p className="text-red-500">{errors.mei.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
              企業名
            </label>
            <div className="mt-2.5">
              <input
                placeholder='株式会社ハウコレ'
                {...register("company", { required: "※ 企業名を入力してください" })}
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-3 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              />
              {errors.company && <p className="text-red-500">{errors.company.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              メールアドレス
            </label>
            <div className="mt-2.5">
              <input
                placeholder='example@example.com'
                {...register("email", { 
                  required: "※ メールアドレスを入力してください",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "※ 有効なメールアドレスを入力してください"
                  }
                })}
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-3 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              電話番号
            </label>
            <div className="mt-2.5">
              <input
                placeholder='080-1234-5678'
                {...register("tel", {
                  required: "※ 電話番号を入力してください",
                  pattern: {
                    value: /^\d+$/,
                    message: "※ 有効な電話番号を入力してください",
                  },
                })}
                type="tel"
                name="tel"
                id="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-3 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              />
              {errors.tel && <p className="text-red-500">{errors.tel.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              内容
            </label>
            <div className="mt-2.5">
              <textarea
                placeholder='お問い合わせです。'
                {...register("message", { required: "※ 内容を入力してください" })}
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-3 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            送信
          </button>
        </div>
      </form>
      </div>
    </div>

    {/* 送信確認モーダル */}

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setContactDialogOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      お問い合わせを送信しますか？
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        お問い合わせの内容は、ポートフォリオの作成者にのみ共有されます。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={handleCancel}
                    ref={cancelButtonRef}
                  >
                    キャンセル
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={handleConfirmSend}
                  >
                    送信
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    {/* 送信完了アラート */}

    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        style={{ 
          top: headerStyle.transform === 'translateY(0)' ? '3rem' : '-1rem',
          transition: 'top 0.3s',
        }}
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">お問い合わせありがとうございます</p>
                    <p className="mt-1 text-sm text-gray-500">数日以内にご連絡いたしますので、しばらくお待ちください。</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setContactConfirmShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>

    {/* フッター */}
    
    <footer className="bg-gray-800 z-50 mt-20" style={{ boxShadow: '0 -8px 12px -4px rgba(255, 255, 255, 0.1), 0 -8px 12px -4px rgba(255, 255, 255, 0.06)' }}>
        {/* 検索 */}
        {/* <div className="mx-auto mt-16 max-w-xl sm:mt-20 pr-6 pl-6 lg:pr-0 lg:pl-0">
        <form>
          <div className="w-full pt-10">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </form>
        </div> */}
        {/* ここまで */}
      <div className="pt-10 mx-auto max-w-7xl overflow-hidden px-6 py-5 sm:py-10 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6 text-center">
            <button onClick={scrollToTop} className="text-sm leading-6 text-white hover:text-gray-900">
              Home
            </button>
          </div>
          <div className="pb-6 text-center">
            <Link to="Activities" smooth={true} duration={500} className="cursor-pointer text-sm leading-6 text-white hover:text-gray-900">
              Activities
            </Link>
          </div>
          <div className="pb-6 text-center">
            <Link to="Internship" smooth={true} duration={500} className="cursor-pointer text-sm leading-6 text-white hover:text-gray-900">
              Internship
            </Link>
          </div>
          <div className="pb-6 text-center">
            <Link to="Service" smooth={true} duration={500} className="cursor-pointer text-sm leading-6 text-white hover:text-gray-900">
              Services
            </Link>
          </div>
          <div className="pb-6 text-center">
            <Link to="Skills" smooth={true} duration={500} className="cursor-pointer text-sm leading-6 text-white hover:text-gray-900">
              Skills
            </Link>
          </div>
          <div className="pb-6 text-center">
            <Link to="Contact" smooth={true} duration={500} className="cursor-pointer text-sm leading-6 text-white hover:text-gray-900">
              Contact
            </Link>
          </div>
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {/* ソーシャルリンクは変更なし */}
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} target='blank' className="text-white hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>

    </div>
  )
}
