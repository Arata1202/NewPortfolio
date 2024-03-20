import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react';
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { frontend, backend, tools } from '../Components/Skills'
import { footerNavigation } from '../Components/FooterNav'
import { settings } from '../Components/Slick'
import { interns, features } from '../Components/Activities'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

export default function Example() {
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
  return (

    // ナビゲーション

    <div className="bg-gray-800">
        <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-gray-800" style={{...headerStyle, boxShadow: '0 8px 12px -4px rgba(255, 255, 255, 0.1), 0 4px 8px -4px rgba(255, 255, 255, 0.06)'}}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div>
                <a href="https://newportfolio.at-project.link/">
                {/* <h2 className='text-white text-4xl'>Real Portfolio</h2> */}
                <img src="images/リアルポートフォリオ.png" alt="" loading="lazy" className='md:w-1/2 lg:w-2/5 ml-2' />
                </a>
              </div>
              <div className="flex items-center px-2 lg:px-0">
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href="/" 
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Home
                    </a>
                    <a
                      href="#Activities"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Activities
                    </a>
                    <a
                      href="#Service"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Services
                    </a>
                    <a
                      href="#Skills"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Skills
                    </a>
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
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Activities"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Activities
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Service"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Services
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Skills"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Skills
              </Disclosure.Button>
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
              href="https://github.com/Arata1202"
              className="inline-flex justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              <FaGithub className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:s13202200279@toyo.jp"
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
              千葉県在住の20歳。
              2023年7月からプログラミングを独学し、１ヶ月でPHPを習得。
              10月にはエンジニアのインターンシップに参加し、日々スキルアップを図っています。
              2023年の8月には大学生活やプログラミングに関するブログを開始しました。
              大学で学んでいるマーケティングスキルを活かして、人々のニーズを考えながら記事を執筆しています。
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
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/1.jpg"
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/4.jpg"
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div> 
          </Slider>
          <div className="group relative mt-8">
              <h3 className="text-2xl font-semibold leading-6 text-white">
                  Travel
              </h3>
              <p className="mt-5 text-sm leading-6 text-white">旅行が好きで何度も温泉地や観光スポットへ行きました。思い出ができるだけでなく、土地勘がついたり計画性が上がることなどメリットも大きかったです。ちなみに乳頭温泉郷がとても良かったので訪れてみてください。</p>
            </div>
          </div>

          <div>
          <Slider {...settings}>
            <div className="relative w-full">
              <img
                src="/images/Trip/3.jpg"
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/8.jpg"
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/9.jpg"
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div> 
          </Slider>
          <div className="group relative mt-8">
              <h3 className="text-2xl font-semibold leading-6 text-white">
                  Day Trips
              </h3>
              <p className="mt-5 text-sm leading-6 text-white">日帰り旅行も何度も行きました。1日という限られた時間をフルに活用して、出来るだけ多くのスポットを観光していたため、1日のスケジュール管理能力が身についたと実感しています。</p>
            </div>
          </div>

          <div>
          <Slider {...settings}>
            <div className="relative w-full">
              <img
                src="/images/Trip/5.jpg"
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/7.jpg"
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div>
            <div className="relative w-full">
              <img
                src="/images/Trip/6.jpg"
                alt=""
                loading="lazy"
                className="aspect-[13/9] w-full bg-gray-100 object-cover sm:aspect-[13/9] lg:aspect-[13/9]"
              />
            </div> 
          </Slider>
            <div className="group relative mt-8">
              <h3 className="text-2xl font-semibold leading-6 text-white">
              Transportation
              </h3>
              <p className="mt-5 text-sm leading-6 text-white">旅行では、如何に快適かつコストを抑えて移動出来るかを考えていたため、JRの青春18切符やJALのスカイメイトなどを活用することが多かったです。コスト管理能力も身についたと考えています。</p>
            </div>
            </div>
        </div>
        <hr className="border-b border-8 border-dashed border-gray-700 mt-20" />
      </div>
    </div>

    {/* 経験 */}
    <div id="Activities" className="bg-gray-800 py-10 sm:py-10 mt-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-20 text-center">Activities</h2>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="font-semibold leading-7 text-white text-2xl">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-5 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-white">{feature.description}</p>
                </dd>
                <dd className="mt-5 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-white text-1xl text-bold">{feature.description_2}</p>
                </dd>
              </div>
            ))}
          </dl>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
            {interns.map((intern) => (
              <div key={intern.name} className="flex flex-col mt-20">
                <dt className="font-semibold leading-7 text-white text-2xl">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700">
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
        </div>
      <hr className="border-b border-8 border-dashed border-gray-700 mt-20" />
      </div>
    </div>


    {/* サービス */}

    <div id='Service' className="bg-gray-800 py-10 sm:py-10">
    <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-20">Services</h2>
        </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">Search Analytics API</h1>
          <div className="relative overflow-hidden pt-5 lg:pt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                className="mb-[-1%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                src="images/Services/query.jpg"
                loading="lazy"
                alt=""
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-700 pt-[7%]" />
              </div>
            </div>
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-2xl">Vue.js｜Laravel｜Google Cloud API</h1>
          <div className="mt-5 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-1">
            <div>
              <p>
              ブログの運用をさらに便利にするアプリケーションを開発しました。
              このアプリケーションでは、検索パフォーマンスやページスピード、お問い合わせなどを一括で管理することが出来ます。
              本来であれば異なるブラウザで確認する必要があるため、作業効率がさらに向上します。
              フレームワークはインターンで学習したLaravelとVue.jsを採用し、デプロイ先にはAWS EC2を採用しました。
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="#"
              className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">Trip Pulse X</h1>
          <div className="relative overflow-hidden pt-5 lg:pt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                className="mb-[-1%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                src="images/Services/travel.jpg"
                loading="lazy"
                alt=""
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-700 pt-[7%]" />
              </div>
            </div>
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-2xl">HTML｜CSS｜PHP｜JavaScript｜jQuery｜FTP</h1>
          <div className="mt-5 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-1">
            <div>
              <p>
                私は旅行が好きなので、
                旅行好きユーザーが旅行に関する情報のみを共有するアプリケーションを開発しました。
                都道府県名や観光地名による検索や投稿機能だけでなく、コメント機能でコミュニケーションを取ることも出来ます。
                またAjaxによるいいね機能なども実装しており、リアルタイムでいいね数を取得することなども出来ます。
                JavaScriptによるバリデーションチェックや、投稿内容・ユーザー情報のCRUD機能など、細部まで拘って実装しています。
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
          <a
              href="#"
              className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">Portfolio</h1>
          <div className="relative overflow-hidden pt-5 lg:pt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                className="mb-[-1%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                src="images/Services/portfolio.jpg"
                alt=""
                loading="lazy"
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-700 pt-[7%]" />
              </div>
            </div>
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-2xl">TypeScript｜React.js｜AWS Amplify</h1>
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
            <a
              href="#"
              className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-white hover:bg-opacity-40"
            >
              Read More
            </a>
          </div>
        </div>
        <hr className="border-b border-8 border-dashed border-gray-700 mt-20" />
      </div>
    </div>

    {/* スキル */}
    <div id="Skills" className="bg-gray-800 py-0 sm:py-0">
    <div className="mx-auto max-w-7xl text-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Skills</h2>
        </div>
        <div className="ml-7">
            <h2 className="mt-6 text-left text-3xl font-bold tracking-tight text-white sm:text-3xl">Frontend</h2>
        </div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-17 m-6">
            {frontend.map((skill, index) => (
                <li key={index} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                    <div className="flex flex-1 flex-col p-3 bg-gray-700">
                        <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={skill.imageUrl} alt="" loading="lazy" />
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
                        <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={skill.imageUrl} alt="" loading="lazy" />
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
                        <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={skill.imageUrl} alt="" loading="lazy" />
                        <h3 className="mt-2 mb-1 text-sm font-medium text-white text-lg">{skill.name}</h3>
                        <p className="text-sm text-white text-left">{skill.title}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    </div>

    {/* フッター */}
    
    <footer className="bg-gray-800 z-50 mt-20" style={{ boxShadow: '0 -8px 12px -4px rgba(255, 255, 255, 0.1), 0 -8px 12px -4px rgba(255, 255, 255, 0.06)' }}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-5 sm:py-10 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="pb-6 text-center">
              <a href={item.href} className="text-sm leading-6 text-white hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-white hover:text-gray-500">
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
